<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="pr-10 pl-10 text-center"
  >
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="3" lg="3">
        <v-text-field
          v-model="name"
          :rules="nameRules"
          required
          name="nome"
          color="primary"
          label="Nome"
          outlined
          dark
          hide-details
        />
      </v-col>
      <v-col cols="12" md="3" lg="3">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          name="email"
          required
          color="primary"
          label="E-mail"
          outlined
          dark
          hide-details
        />
      </v-col>
      <v-col cols="12" md="3" lg="3">
        <v-text-field
          v-model="telephone"
          :rules="telephoneRules"
          name="telefone"
          v-mask="['(##) ####-####', '(##) #####-####']"
          required
          color="primary"
          label="Celular"
          outlined
          dark
          hide-details
        />
      </v-col>
      <v-col cols="12" md="3" lg="3" >
        <v-btn
          tile
          color="primary"
          block
          x-large
          class="black--text"
          @click="process()"
        >
          {{loading ? 'Cadastrando...' : 'Cadastrar'}}
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-dialog
      v-model="loading"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text class="pt-3">
          Aguarde, por favor...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="msg_error"
      hide-overlay
      width="300"
    >
      <v-card
        color="primary"
      >
        <v-alert
          type="primary"
          class="mb-0 white--text"
        >
          Nao é possivel prosseguir! <br><small>Algo deu errado 😔</small>
        </v-alert>
      </v-card>
    </v-dialog>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Informe seu nome'
    ],
    email: '',
    emailRules: [
      v => !!v || 'Informe seu e-mail',
      v => /.+@.+\..+/.test(v) || 'O e-mail precisa ser válido',
    ],
    telephone: '',
    telephoneRules: [
      v => !!v || 'Digite seu telefone',
      v => v.length > 13 || 'O telefone precisa ser válido',
    ],
    column: null,
    loading: false,
    msg_error: false
  }),
  methods:{
    process(){
      this.validate_form().then(()=>{
        this.valid ? this.send() : '';
      });
    },
    async validate_form() {
      return await this.$refs.form.validate();
    },
    async send() {
      this.loading = true;
      await this.$axios.$post('x-green/contact',{
          name: this.name,
          email: this.email,
          telephone: this.telephone,
          message: null,
          origin: "LEAD_lp_ultimato_x-green",
          notify_email: null
        }
      )
        .then(response => {
          console.log('Lead cadastrado!');
          console.log(response);
          this.$axios({
            method: 'post',
            url: 'https://xgreen-ultimato-api-joty3.ondigitalocean.app/api/get-response/ultimato',
            data: {
              name: this.name,
              email: this.email
            }
          }).then(response => {
            console.log('Lead cadastrado na lista do get response!');
            console.log(response);
            window.location.href = "https://t.me/EventoUltimato";
          });
        })
        .catch(response => {
          this.loading = false;
          this.msg_error = true;
          console.log('Erro!');
          console.log(response);
        });
    },
    // async track() {
    //   await this.$gtag.event('Submit Form Sign Up', {
    //     'event_label': 'Gs0jCOGluIwCEJCqrLUB',
    //     'event_category': 'Enviar formulário de lead',
    //     'value': '1'
    //   })
    // }
  }
}
</script>
