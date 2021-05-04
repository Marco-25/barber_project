# Recuperação de senha
**RF  (requisitos funcionais)**
  - O usuário deve poder recuperar sua senha informando seu e-mail;
  - O usuario deve receber um e-mail com instruções de recuperação de senha;
  - O usuario deve poder resetar sua senha

**RNF (requisitos não funcionais)**
  - Utilizar Mailtrap para testar envios de email em ambiente de desenvolvimento;
  - Utilizar Amazon SES(simple emails service) para envios de email em produção
  - O envio de e-mails deve acontecer em segundo plano (background job)

**RN  (regras de nogocio)**
  - O link enviado por email para resetar senha, deve expirar em 2h;
  - O usuario deve confirmar a nova senha;

# Atualização do perfil
**RF  (requisitos funcionais)**
  - O usuário deve poder atualizar seu nome, email e senha

**RNF (requisitos não funcionais)**


**RN  (regras de nogocio)**
  - O usuario não pode atualizar seu email para um email já utilizado;
  - Para atualizar sua senha, o usuario deve informar a senha antiga;
  - Para atualizar sua senha, o usuario precisa confirmar a nova senha;

# Painel do prestador
**RF  (requisitos funcionais)**
  - O prestador deve poder listar seus agendamentos de um dia especifico;
  - O prestador deve receber uma notificação sempre que houver um novo agendadmento;
  - O prestador deve poder visualizar as notificações lidas;

**RNF (requisitos não funcionais)**
  - Os agendamentos do prestador no dia devem ser armazenados em cache;
  - As notificações do prestador devem ser armazenadas no mongoDB;
  - As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;


**RN  (regras de nogocio)**
  - A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços
**RF  (requisitos funcionais)**
  - O usuário deve poder listar todos os prestadores de servço cadastrados;
  - O usuario deve poder listar os dias de um mês com pelo menos um horario disponivel de um prestador;
  - O usuario deve poder listar horarios disponiveis em um dia especifico de um prestador;
  - O usuario deve poder realizar um novo agendamento com um prestador;

**RNF (requisitos não funcionais)**
  - A listagem de pretadores deve ser armazenada em cache;


**RN  (regras de nogocio)**
  - Cada agendamento deve durar 1h exatamente;
  - Os agendamenetos devem estar disponiveis entre 8h às 18h (Primeiro às 8h, ultimo as 17h)
  - O usuario não pode agendar em um horario ja ocupado;
  - O usuario não pode agendar em um horario que ja passou;
  - O usuario não pode agendar serviços com ele mesmo;
