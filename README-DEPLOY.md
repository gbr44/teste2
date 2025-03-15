# Deploy do HanakoBot no Railway

## Instruções para Implantação

Para implantar este bot no Railway, siga estas etapas:

1. Certifique-se de que você tem uma conta no [Railway](https://railway.app/)

2. Conecte sua conta do GitHub ao Railway

3. No Railway, clique em "New Project" e selecione "Deploy from GitHub repo"

4. Selecione o repositório `gbr44/teste2` (ou o repositório para onde você fez o fork)

5. Configure as seguintes variáveis de ambiente no Railway:
   - `OWNER`: Seu número de WhatsApp (ex: 6283136099660)
   - `NAME`: Nome do bot (ex: ʜᴀɴᴀᴋᴏ-ᴋᴜɴ-ʙᴏᴛᴢ)
   - `OWNERNAME`: Seu nome (ex: ʟᴇᴏᴏxᴢʏ)
   - `OWNERNAME2`: Nome alternativo (ex: ᴅᴇᴋᴜ)
   - `DATABASE`: Nome do arquivo de banco de dados (ex: hanako-db)
   - `TZ`: Fuso horário (ex: America/Sao_Paulo)

6. Clique em "Deploy" para iniciar a implantação

7. Quando o bot iniciar, você precisará escanear o QR code para autenticar o WhatsApp

## Observações Importantes

- As sessões do WhatsApp são armazenadas na pasta `sessions/`
- O banco de dados é armazenado em um arquivo JSON
- O servidor web integrado mantém a aplicação ativa no Railway
- Certifique-se de que o Railway não desligue a aplicação por inatividade

## Solução de Problemas

Se você encontrar problemas durante a implantação:

1. Verifique os logs no painel do Railway
2. Certifique-se de que todas as variáveis de ambiente estão configuradas corretamente
3. Se o bot não iniciar, tente reiniciar a implantação

## Manutenção

Para manter o bot funcionando corretamente:

1. Monitore regularmente os logs no Railway
2. Verifique se o bot está online periodicamente
3. Se necessário, reinicie a aplicação através do painel do Railway