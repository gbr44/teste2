# Deploy do HanakoBot no Railway

## Configuração

Para fazer o deploy deste bot no Railway, siga estas etapas:

1. Faça fork deste repositório para sua conta do GitHub
2. Crie uma nova aplicação no Railway a partir do seu repositório GitHub
3. Configure as seguintes variáveis de ambiente no Railway:
   - `OWNER`: Seu número de WhatsApp (ex: 6283136099660)
   - `NAME`: Nome do bot (ex: ʜᴀɴᴀᴋᴏ-ᴋᴜɴ-ʙᴏᴛᴢ)
   - `OWNERNAME`: Seu nome (ex: ʟᴇᴏᴏxᴢʏ)
   - `OWNERNAME2`: Nome alternativo (ex: ᴅᴇᴋᴜ)
   - `DATABASE`: Nome do arquivo de banco de dados (ex: hanako-db)
   - `TZ`: Fuso horário (ex: Asia/Jakarta)

4. Faça o deploy da aplicação
5. Quando o bot iniciar, você precisará escanear o QR code para autenticar o WhatsApp

## Manutenção

O Railway pode desativar aplicações inativas. Para evitar isso, este projeto inclui um servidor web simples que mantém a aplicação ativa.

## Observações

- As sessões do WhatsApp são armazenadas na pasta `sessions/`
- O banco de dados é armazenado em um arquivo JSON
- Para manter o bot funcionando continuamente, certifique-se de que o Railway não desligue a aplicação por inatividade