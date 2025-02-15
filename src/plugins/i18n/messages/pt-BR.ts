export default {
  'sign-up': {
    'index': {
      'title': 'Criando uma nova conta',
      'fields': {
        'email': {
          'label': 'Email',
          'placeholder': "usuario.incrivel{'@'}email.com",
          'hint': 'Preencha com o SEU endereço de email 👀',
          'validations': {
            'must-be-filled': '@:validations.must-be-filled',
            'must-be-available': 'Este email não está disponível'
          }
        }
      },
      'buttons': {
        'submit': {
          'label': 'Enviar código de verificação',
        },
        'cancel': {
          'label': 'Eu já tenho uma conta',
        }
      }
    }
  },
  'validations': {
    'must-be-filled': 'Este campo é obrigatório'
  },
  'shared': {
    'theme': 'Tema',
    'language': 'Idioma',
  }
}
