export default {
  'sign-up': {
    'index': {
      'title': 'Creating a new account',
      'fields': {
        'email': {
          'label': 'Email',
          'placeholder': "amazing.user{'@'}email.com",
          'hint': 'Please enter YOUR email address 👀',
          'validations': {
            'must-be-filled': '@:validations.must-be-filled',
            'must-be-available': 'This email is not available'
          }
        }
      },
      'buttons': {
        'submit': {
          'label': 'Send verification code',
        },
        'cancel': {
          'label': 'I already have an account',
        }
      }
    }
  },
  'validations': {
    'must-be-filled': 'This field is required'
  },
  'shared': {
    'theme': 'Theme',
    'language': 'Language',
  }
}
