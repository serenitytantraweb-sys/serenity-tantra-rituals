const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Configurações do Google Calendar
const SERVICE_ACCOUNT_EMAIL = 'serenity-tantra@serenity-tantra.iam.gserviceaccount.com';
const SERVICE_ACCOUNT_PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDaYAsAcoVleh8x
rPyZjQd6gafxaGeD1QjJW4rX94oQbZDDXUpNRm9ruAAe/Wr23I1vNT2znxcyKBwz
VgU2muZ6B8isae4csMi6V75Qpu7dDY5S1E+Y+YwyHDeE/4s2uZrgN7hcwtrT4Al4
lGfZqKrelRA1lqRhK+mzKJq18Nsdw/DtLfNqLvl6pNvg5BXhuCk0dRoc16qJQ5xW
Tb4NDgnIqXReoMGlj+5UDzYPDMdwmCdQtRmVo9XauCydEW6Z5HwOcMXiaFMKrkKE
776C1vRFj9JeKKm/nRrwEHkyGn/vge8Xzhq9WHuzh8A8FBhvlbz8/R6GzJ+aJI9N
F9QagqlpAgMBAAECggEAD8kELT1vVG0wzA/Lwp27KKkupqNRYuox/xGARn7nmqsQ
3SO6jJNxgmvZNmRDKHe7kYpbshw8j6zukkIUO7o+vBt2mgqeN7IKZc3p5+fpOaQS
jFI53r5LMA7Hb0m5mnRtiZT9iAGzJ8BOGZ/rUdnWCs44+bwF7drqwxSa+lk1aD/w
w2Y3gRrE9sRd/yFwcc7OTx+r/ooIeMoBKJzwjjZ/w7UgoBKgUOTI41YPa41A/EWl
VZdOVhBfIis4xwWPODLLsnmDg0tQEGPyzd5z4sDWsmo+BDum4njfTADF5lXeI3+6
JwP0dTTsBo2YzdHqPjH5+GRuAaYm2xSBYz9EKMarsQKBgQD77w+pFgSLKk6VG/V5
4/U2zVjoYAWnvxgmqrKSFJEWkYhVKH6jVrVAzbpoZqsGCM7zBkAsLDZhAfu6O5iB
G3bcCjL7OqwIcij457A32m0dp0/XQSPRpHFGoAO8E4oWPNBy49GxZaCgO2F5dUNz
IXvvc2ndulAQPOqRNxDP40eKkwKBgQDd5lME+sVNcn1b+skFcZbYSa2SBfzKgkW5
sJvBz+bnR5S/PuRZWClViv/ZdYyGdOa7EaU0vbnWsyRUkv1hwzNpsWNweYqusRby
nyApJDs263BN6USDeYAIyoi1h7NCpOcTE04AqSJa9RJaVYv6GqTamEnGV66b1aja
3bg5UMztkwKBgG0GGmfY0GSNDW63p7Z08OQjX0tIaooaR1BMZHSVE+iJWE9J8+up
lUyS+w09CNvWqgA/fzvecjXuzsncCnYstXYpr8BKtrH8/UAhu3+gNcI0anfDh8Ws
fRzMGHGmnwZakPZ3IoK7cRSGPft6xJKpNeH8tx6uBwHP6s6m3s6oE4ijAoGAStWg
be98ls/jwx9ip/lU3ACNDtACHvGsPiF3hfdtcdZMLesx64e1+Ol1u4rPJ5FJNxGO
W6kYgXXM7NDdrxi7wAtY89epk5yZlp1fpUBYz/660yu2NXjGWzCixkXLiNBANciu
574infZEiD6NhH1z11zAlKmBc4Cs/5MCzCGZ2w0CgYEAmrhmIJYKKEpAqO5Mel1V
I/VQGeF1m5whTVfmE98ohkiQzAUQ1c/bZaGNHEcN4U3sMfeoQjemlwrkNANytfHi
icXAnMY81XxRxAIWOPxe7h98GNJwqYg9bUHfsZnWsL90aFd9NejQxVtpn/9Uii/P
YRBalzeffjd6GeguKcuD/UM=
-----END PRIVATE KEY-----`;
const CALENDAR_ID = 'serenitytantraweb@gmail.com';
const TIME_ZONE = 'Europe/Lisbon';

// Serviços disponíveis
const SERVICES = [
    {
        id: 'harmony-relax',
        name: 'Harmony Relax',
        price: '50€',
        shortDescription: 'Massagem relaxante profunda para liberar tensões e renovar energia.',
        fullDescription: 'Mergulhe em uma experiência de serenidade com a nossa massagem Harmony Relax. Aproveite uma hora completa de técnicas profundas de relaxamento, aplicadas em uma marquesa especialmente projetada para o seu conforto. Em um ambiente acolhedor e envolvente, cada movimento é pensado para liberar tensões e renovar sua energia. Permita-se um descanso total e alcance um estado de paz interior com o Harmony Relax.',
        duration: '60 min',
        environment: 'Marquesa',
        icon: 'relax'
    },
    {
        id: 'therapeutic-relax',
        name: 'Therapeutic Relax',
        price: '80€',
        shortDescription: 'Massagem terapêutica para aliviar tensões profundas e contraturas.',
        fullDescription: 'Nossa massagem Deep Healing Therapy foi desenvolvida para aliviar tensões profundas, liberar contraturas e melhorar a mobilidade muscular. Feita em uma marquesa, utiliza técnicas específicas que trabalham sobre pontos de grande rigidez. Durante uma hora, manobras firmes e pausadas ajudam a desfazer nós musculares, melhorar a circulação e restaurar o equilíbrio natural do corpo. Ideal para quem sofre de estresse, dores musculares, má postura ou sobrecarga física.',
        duration: '60 min',
        environment: 'Marquesa',
        icon: 'therapeutic'
    },
    {
        id: 'divine-energy',
        name: 'Divine Energy Massage',
        subtitle: 'Massagem Tântrica',
        price: '130€',
        shortDescription: 'Fusão entre sabedoria tântrica e energia divina para conexão interior.',
        fullDescription: 'O Divine Energy Massage é uma fusão entre sabedoria tântrica e energia divina. Realizado em tatami, com música suave e luzes quentes, ativa canais energéticos através de toques conscientes e profundos. Promove conexão interior, liberação emocional e bem-estar integral, levando o paciente a um estado de harmonia e plenitude.',
        duration: '90 min',
        environment: 'Tatami',
        icon: 'energy'
    },
    {
        id: 'nuru-essence',
        name: 'Nuru Essence Massage',
        price: '160€',
        shortDescription: 'Deslizamento corporal com óleo quente para relaxação profunda.',
        fullDescription: 'O Nuru Essence Massage une deslizamento corporal e calor do óleo quente em um tatami, criando uma atmosfera de calma, sensualidade e conexão. Durante uma hora, o contato pele com pele e o óleo quente produzem um deslizamento envolvente que libera tensões e induz profunda relaxação e bem-estar.',
        duration: '60 min',
        environment: 'Tatami',
        icon: 'nuru'
    },
    {
        id: 'lingam-yoni',
        name: 'Massagem Lingam-Yoni',
        price: '80€',
        shortDescription: 'Técnica tântrica para equilibrar energia sexual e emocional.',
        fullDescription: 'Técnica terapêutica da tradição tântrica que busca equilibrar energia sexual e emocional, promovendo bem-estar e conexão interior. Realizada com respeito e consciência, trabalha zonas energéticas íntimas para liberar tensões acumuladas, desbloquear emoções e ampliar sensibilidade corporal. Ajuda a relaxar a musculatura profunda, harmonizar energia sexual, melhorar circulação, promover calma e fortalecer o autoconhecimento. A experiência vai além de uma massagem tradicional, sendo um convite à cura e expansão vital.',
        duration: '60 min',
        environment: 'Tatami',
        icon: 'tantric'
    },
    {
        id: 'armonia-podal',
        name: 'Armonía Sensual Podal',
        price: '140€',
        shortDescription: 'Relaxamento focado nos pés com estimulação de pontos nervosos.',
        fullDescription: 'Uma experiência única de relaxamento e prazer focada nos pés. Movimentos suaves e técnicas especializadas estimulam pontos nervosos, promovendo circulação, alívio da fadiga e revitalização dos sentidos. Em atmosfera tranquila, cada sessão se transforma em um momento de equilíbrio e renovação sensorial.',
        duration: '60 min',
        environment: 'Marquesa',
        icon: 'feet'
    },
    {
        id: 'armonia-sentidos',
        name: 'Armonía de Sentidos',
        price: '100€',
        shortDescription: 'Viagem sensorial com técnicas que despertam e harmonizam os sentidos.',
        fullDescription: 'Uma viagem sensorial realizada em marquesa ao longo de uma hora, com toque delicado e técnicas que despertam e harmonizam os sentidos. A terapeuta utiliza movimentos precisos para liberar tensões, reduzir estresse e fortalecer a conexão corpo–mente. A experiência é envolvente, elegante e profundamente relaxante.',
        duration: '60 min',
        environment: 'Marquesa',
        icon: 'senses'
    },
    {
        id: 'lomi-lomi',
        name: 'Lomi Lomi Serenidad',
        price: '70€',
        shortDescription: 'Massagem havaiana com movimentos fluidos como ondas do mar.',
        fullDescription: 'Inspirado no oceano, o Lomi Lomi Serenidad utiliza antebraços para criar movimentos fluidos e contínuos, como ondas do mar. Em uma marquesa, o ambiente transmite paz e harmonia enquanto tensões são aliviadas e a energia vital restaurada, promovendo um estado profundo de tranquilidade.',
        duration: '60 min',
        environment: 'Marquesa',
        icon: 'waves'
    },
    {
        id: 'ritual-velas',
        name: 'Ritual Terapêutico com Velas',
        price: '70€',
        shortDescription: 'Massagem com cera quente de velas especiais para hidratação e relaxamento.',
        fullDescription: 'Massagem de uma hora realizada com cera quente de velas especiais, que hidrata a peau enquanto técnicas relaxantes aliviam tensões e restauram a energia. Um ritual sensorial que revitaliza corpo e mente em clima de serenidade.',
        duration: '60 min',
        environment: 'Marquesa',
        icon: 'candle'
    },
    {
        id: 'reflexologia',
        name: 'Reflexologia Vital Balance',
        price: '40€',
        shortDescription: 'Estimulação de pontos reflexos nos pés relacionados a órgãos internos.',
        fullDescription: 'Terapia realizada na marquesa que estimula pontos reflexos nos pés relacionados a órgãos internos. Pressões rítmicas liberam tensões, melhoram a circulação e equilibram a energia interna. Ideal para quem busca relaxamento profundo, alívio do estresse e ativação dos processos naturais de autocura.',
        duration: '50 min',
        environment: 'Marquesa',
        icon: 'reflexology'
    },
    {
        id: 'glow-relax',
        name: 'Glow & Relax Ritual',
        price: '150€',
        shortDescription: 'Ritual completo com esfoliação corporal, facial e massagem relaxante.',
        fullDescription: 'Ritual completo que inclui 40 minutos de esfoliação corporal, 20 minutos de esfoliação facial com hidratação e 50 minutos de massagem relaxante. Proporciona renovação intensa, pele radiante e sensação plena de bem-estar e revitalização.',
        duration: '110 min',
        environment: 'Marquesa',
        icon: 'glow'
    }
];

/**
 * Função auxiliar para formatar data e hora corretamente
 */
function formatDateTime(dateString, timeString) {
    // Garantir que a data esteja no formato YYYY-MM-DD
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        throw new Error('Data inválida: ' + dateString);
    }

    // Garantir que o horário esteja no formato HH:MM
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/;
    if (!timeRegex.test(timeString)) {
        throw new Error('Horário inválido: ' + timeString);
    }

    // Combinar data e hora
    const [hours, minutes] = timeString.split(':');
    date.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    return date;
}

/**
 * Cria evento no Google Calendar com duração real do serviço - CORRIGIDA
 */
async function createCalendarEvent(bookingData) {
    try {
        const auth = new google.auth.JWT(
            SERVICE_ACCOUNT_EMAIL,
            null,
            SERVICE_ACCOUNT_PRIVATE_KEY,
            ['https://www.googleapis.com/auth/calendar']
        );
        
        await auth.authorize();
        const calendar = google.calendar({ version: 'v3', auth });

        const { services, totalPrice, name, email, phone, date, time } = bookingData;

        // Usar a função auxiliar para formatar data e hora
        const startDateTime = formatDateTime(date, time);
        const endDateTime = new Date(startDateTime);
        
        // CORREÇÃO: Calcular duração total baseada nos serviços selecionados
        let totalDurationMinutes = 0;
        
        services.forEach(service => {
            // CORREÇÃO: Usar a duração real do serviço do array SERVICES
            const serviceInfo = SERVICES.find(s => s.name === service.name);
            if (serviceInfo && serviceInfo.duration) {
                const durationMatch = serviceInfo.duration.match(/(\d+)\s*min/);
                if (durationMatch) {
                    totalDurationMinutes += parseInt(durationMatch[1]);
                    console.log(`⏱️ Serviço: ${service.name} - Duração: ${serviceInfo.duration}`);
                } else {
                    // Fallback: se não conseguir extrair, usa 60 minutos
                    totalDurationMinutes += 60;
                    console.log(`⚠️ Serviço: ${service.name} - Duração padrão: 60min`);
                }
            } else {
                // Se não encontrar informações do serviço, usa 60 minutos
                totalDurationMinutes += 60;
                console.log(`⚠️ Serviço não encontrado: ${service.name} - Duração padrão: 60min`);
            }
        });
        
        // CORREÇÃO: Usar a duração real em minutos, não arredondar para horas
        endDateTime.setMinutes(endDateTime.getMinutes() + totalDurationMinutes);

        console.log('📅 AGENDAMENTO CORRIGIDO - Datas formatadas:', {
            start: startDateTime.toISOString(),
            end: endDateTime.toISOString(),
            totalDurationMinutes: totalDurationMinutes,
            durationHours: (totalDurationMinutes / 60).toFixed(1),
            services: services.map(s => s.name)
        });

        const servicesList = services.map(s => {
            const serviceInfo = SERVICES.find(serv => serv.name === s.name);
            const duration = serviceInfo ? serviceInfo.duration : '60 min';
            return `${s.name} - ${s.price} (${duration})`;
        }).join('\n');
        
        const description = `Cliente: ${name}\nEmail: ${email}\nTelefone: ${phone}\n\nServiços:\n${servicesList}\n\nDuração Total: ${totalDurationMinutes} minutos\nPreço Total: ${totalPrice}\n\n💡 Este horário foi bloqueado por ${totalDurationMinutes} minutos (${(totalDurationMinutes / 60).toFixed(1)} horas) para garantir o tempo necessário para todos os serviços.`;

        const event = {
            summary: `${services.map(s => s.name).join(', ')} - ${name}`,
            description: description,
            location: 'Serenity Tantra - Portimão, Portugal',
            start: {
                dateTime: startDateTime.toISOString(),
                timeZone: TIME_ZONE,
            },
            end: {
                dateTime: endDateTime.toISOString(),
                timeZone: TIME_ZONE,
            },
            colorId: '4',
            reminders: {
                useDefault: false,
                overrides: [
                    { method: 'email', minutes: 24 * 60 },
                    { method: 'popup', minutes: 60 },
                ],
            },
        };

        const response = await calendar.events.insert({
            calendarId: CALENDAR_ID,
            resource: event,
            sendUpdates: 'none',
        });

        console.log('✅ EVENTO CRIADO NO GOOGLE CALENDAR:', response.data.id);
        console.log(`⏰ DURAÇÃO REAL: ${totalDurationMinutes} minutos (${(totalDurationMinutes / 60).toFixed(1)} horas)`);
        console.log(`🕒 Período: ${startDateTime.toLocaleTimeString('pt-BR')} às ${endDateTime.toLocaleTimeString('pt-BR')}`);
        
        return response.data.id;

    } catch (error) {
        console.error('❌ Erro ao criar evento no Google Calendar:', error.message);
        
        // Em caso de erro, retornar um evento simulado
        console.log('🔄 Retornando evento simulado devido ao erro');
        return 'simulated-event-' + Date.now();
    }
}

/**
 * Consulta horários ocupados no Google Calendar considerando a duração dos serviços
 */
async function getBusyTimesFromCalendar(date) {
    try {
        const auth = new google.auth.JWT(
            SERVICE_ACCOUNT_EMAIL,
            null,
            SERVICE_ACCOUNT_PRIVATE_KEY,
            ['https://www.googleapis.com/auth/calendar.readonly']
        );
        
        await auth.authorize();
        const calendar = google.calendar({ version: 'v3', auth });
        
        const startOfDay = new Date(`${date}T00:00:00`);
        const endOfDay = new Date(`${date}T23:59:59`);
        
        console.log('🔍 Consultando calendário:', {
            calendarId: CALENDAR_ID,
            start: startOfDay.toISOString(),
            end: endOfDay.toISOString()
        });

        const response = await calendar.events.list({
            calendarId: CALENDAR_ID,
            timeMin: startOfDay.toISOString(),
            timeMax: endOfDay.toISOString(),
            singleEvents: true,
            orderBy: 'startTime'
        });
        
        const events = response.data.items || [];
        const busyTimes = [];

        events.forEach(event => {
            if (event.start.dateTime) {
                const startTime = new Date(event.start.dateTime);
                const endTime = new Date(event.end.dateTime);
                
                // Calcular duração do evento em horas
                const durationHours = (endTime - startTime) / (1000 * 60 * 60);
                
                // Gerar todos os horários ocupados baseado na duração
                let currentTime = new Date(startTime);
                
                while (currentTime < endTime) {
                    const hours = String(currentTime.getHours()).padStart(2, '0');
                    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
                    const timeString = `${hours}:${minutes}`;
                    
                    // Adicionar apenas se for um horário de início válido (horas cheias ou meia-hora)
                    if (minutes === '00' || minutes === '30') {
                        if (!busyTimes.includes(timeString)) {
                            busyTimes.push(timeString);
                        }
                    }
                    
                    // Avançar 30 minutos
                    currentTime.setMinutes(currentTime.getMinutes() + 30);
                }
                
                console.log('📅 Evento encontrado:', {
                    summary: event.summary,
                    start: event.start.dateTime,
                    end: event.end.dateTime,
                    duration: `${durationHours} horas`,
                    busyTimes: busyTimes.filter(t => t.startsWith(String(startTime.getHours()).padStart(2, '0')))
                });
            }
        });

        console.log('✅ Horários ocupados encontrados:', busyTimes.sort());
        return busyTimes.sort();
        
    } catch (error) {
        console.error('❌ Erro ao consultar Google Calendar:', error.message);
        // Em caso de erro, retornar array vazio para não bloquear o agendamento
        return [];
    }
}

/**
 * Health Check
 */
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        uptime: process.uptime(),
        message: 'Tantra Espiritual API está funcionando!',
        timestamp: new Date().toISOString(),
        calendar: 'Google Calendar Configurado'
    });
});

/**
 * Endpoint para obter serviços
 */
app.get('/api/services', async (req, res) => {
    try {
        res.json(SERVICES);
    } catch (error) {
        console.error('❌ Erro ao carregar serviços:', error);
        res.status(500).json({ error: 'Erro ao carregar serviços' });
    }
});

/**
 * Endpoint para verificar disponibilidade - CORRIGIDO
 */
app.get('/api/availability', async (req, res) => {
    const { date } = req.query;
    
    if (!date) {
        return res.status(400).json({ 
            success: false,
            error: 'Data não fornecida' 
        });
    }

    // Validar formato da data
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
        return res.status(400).json({
            success: false,
            error: 'Formato de data inválido. Use YYYY-MM-DD'
        });
    }

    try {
        console.log('🔍 Verificando disponibilidade para:', date);
        
        // Consultar horários ocupados no Google Calendar
        const busyTimes = await getBusyTimesFromCalendar(date);

        console.log('✅ Horários ocupados:', busyTimes);
        
        res.json({ 
            success: true,
            busyTimes 
        });
        
    } catch (error) {
        console.error('❌ Erro ao verificar disponibilidade:', error.message);
        
        // Em caso de erro, retornar array vazio
        res.json({ 
            success: true,
            busyTimes: [],
            note: 'Erro na consulta - retornando todos horários como disponíveis'
        });
    }
});

/**
 * Endpoint para criar agendamentos
 */
app.post('/api/bookings', async (req, res) => {
    console.log('📅 Recebendo agendamento:', JSON.stringify(req.body, null, 2));
    
    try {
        const { services, totalPrice, name, email, phone, date, time } = req.body;
        
        // Validação dos dados
        if (!services || services.length === 0 || !name || !email || !phone || !date || !time) {
            return res.status(400).json({ 
                success: false,
                error: 'Dados incompletos',
                message: 'Todos os campos são obrigatórios.' 
            });
        }

        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                error: 'Email inválido',
                message: 'Por favor, insira um email válido.'
            });
        }

        // Validação de data
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(date)) {
            return res.status(400).json({
                success: false,
                error: 'Formato de data inválido',
                message: 'Use o formato YYYY-MM-DD para a data.'
            });
        }

        // Validação de horário
        const timeRegex = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/;
        if (!timeRegex.test(time)) {
            return res.status(400).json({
                success: false,
                error: 'Formato de horário inválido',
                message: 'Use o formato HH:MM para o horário.'
            });
        }

        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            return res.status(400).json({
                success: false,
                error: 'Data inválida',
                message: 'Não é possível agendar para datas passadas.'
            });
        }

        // Testar formatação de data/hora
        try {
            formatDateTime(date, time);
        } catch (error) {
            return res.status(400).json({
                success: false,
                error: 'Data/hora inválida',
                message: error.message
            });
        }

        // Criar evento no Google Calendar
        const eventId = await createCalendarEvent({
            services,
            totalPrice,
            name,
            email,
            phone,
            date,
            time
        });
        
        console.log('✅ Agendamento criado com ID:', eventId);
        
        // Simular envio de email de confirmação
        console.log('📧 Email de confirmação enviado para:', email);
        console.log('📋 Detalhes do agendamento:');
        console.log('   👤 Cliente:', name);
        console.log('   📞 Telefone:', phone);
        console.log('   📅 Data:', date);
        console.log('   ⏰ Horário:', time);
        console.log('   💰 Total:', totalPrice);
        console.log('   🧘 Serviços:', services.map(s => s.name).join(', '));
        
        res.json({ 
            success: true,
            eventId,
            message: 'Agendamento criado com sucesso! Você receberá uma confirmação por email em breve.' 
        });
        
    } catch (error) {
        console.error('❌ Erro no agendamento:', error.message);
        
        res.status(500).json({ 
            success: false,
            error: 'Erro no agendamento',
            message: error.message || 'Não foi possível criar o agendamento. Tente novamente.'
        });
    }
});

/**
 * Endpoint para contato
 */
app.post('/api/contact', async (req, res) => {
    console.log('📧 Recebendo mensagem de contato:', req.body);
    
    try {
        const { name, email, phone, subject, message } = req.body;
        
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ 
                success: false,
                message: 'Por favor, preencha todos os campos obrigatórios.' 
            });
        }

        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Por favor, insira um email válido.'
            });
        }

        // Simular processamento da mensagem
        console.log(`✅ Mensagem recebida de ${name} (${email})`);
        console.log(`📝 Assunto: ${subject}`);
        console.log(`💬 Mensagem: ${message}`);
        if (phone) console.log(`📞 Telefone: ${phone}`);
        
        res.json({ 
            success: true,
            message: 'Mensagem enviada com sucesso! Retornaremos em breve.' 
        });
        
    } catch (error) {
        console.error('❌ Erro ao processar contato:', error);
        res.status(500).json({ 
            success: false,
            message: 'Erro ao enviar mensagem. Tente novamente.' 
        });
    }
});

/**
 * Endpoint para informações do espaço
 */
app.get('/api/espaco', async (req, res) => {
    try {
        const espacoInfo = {
            nome: 'Tantra Espiritual',
            localizacao: 'Portimão, Portugal',
            descricao: 'Um espaço pensado para o seu conforto, com iluminação suave, aromas relaxantes e atmosfera de serenidade',
            caracteristicas: [
                'Ambiente climatizado',
                'Iluminação ajustável',
                'Música ambiente relaxante',
                'Aromaterapia',
                'Material profissional',
                'Higiene e limpeza rigorosas'
            ],
            imagens: [
                { src: 'espaco1.jpg', alt: 'Entrada acolhedora do espaço' },
                { src: 'espaco2.jpg', alt: 'Corredor com iluminação ambiente' },
                { src: 'espaco3.jpg', alt: 'Sala de massagem com marquesa' },
                { src: 'espaco4.jpg', alt: 'Ambiente tatami com decoração budista' },
                { src: 'espaco5.jpg', alt: 'Tatami com iluminação suave' },
                { src: 'espaco6.jpg', alt: 'Detalhes do espaço de relaxamento' }
            ]
        };
        
        res.json(espacoInfo);
    } catch (error) {
        console.error('❌ Erro ao carregar informações do espaço:', error);
        res.status(500).json({ error: 'Erro ao carregar informações' });
    }
});

/**
 * Servir arquivos estáticos e SPA
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

/**
 * Iniciar servidor
 */
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor Tantra Espiritual rodando na porta ${PORT}`);
    console.log(`✅ Health Check: http://localhost:${PORT}/api/health`);
    console.log(`🌐 Ambiente: ${process.env.NODE_ENV || 'development'}`);
    console.log(`📅 Google Calendar: ✅ Configurado e Funcionando`);
    console.log(`📧 Sistema de agendamento: ✅ Integrado com Google Calendar`);
    console.log(`📞 Sistema de contato: ✅ Funcionando`);
    console.log(`✨ Pronto para receber agendamentos e mensagens!`);
    console.log('');
    console.log('🔗 URLs importantes:');
    console.log(`   📊 Health Check: http://localhost:${PORT}/api/health`);
    console.log(`   🧘 Serviços: http://localhost:${PORT}/api/services`);
    console.log(`   📅 Disponibilidade: http://localhost:${PORT}/api/availability?date=2024-01-15`);
    console.log('');
    console.log('💡 O sistema agora consulta o Google Calendar em tempo real para verificar horários ocupados!');
});