<!-- Vue component -->
<template>
  <form @submit="submitForm">
    <v-row>
      <v-col cols="8" class=" mb-5" v-if="errors.length">
        <v-alert
          dense
          text
          type="error"
        >
          <strong>Bitte korrigiere die folgenden Fehler:</strong>
          <p v-for="error in errors">{{ error }}</p>
        </v-alert>
      </v-col>
      <v-col cols="8" class="text-center mb-5" v-if="isSuccess">
        <v-alert
          dense
          text
          type="success"
        >
          Die Gruppe wurde erfolgreich eingetragen. Sobald die Gruppe geprüft wurde, ist sie für alle sichtbar.
        </v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="6">
            <h4 class="mb-5">Kanal oder Gruppe?</h4>
            <v-alert
              v-if="type_error"
              dense
              text
              type="error"
            >
              {{ type_error }}
            </v-alert>
            <v-row>
              <v-col cols="6" >

                <v-card elevation="1" v-bind:class="{ 'card-active': type === 'channel'}" @click="activateType('channel')">
                  <v-card-text class="text-center">
                    <h3 class="card-title">Kanal</h3>
                    <fa :icon="['fas', 'volume-off']" size="6x" style="width: 100%;"/>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6" >
                <v-card elevation="1" v-bind:class="{ 'card-active': type === 'group'}" @click="activateType('group')">
                  <v-card-text class="text-center">
                    <h3 class="card-title">Gruppe</h3>
                    <fa :icon="['fas', 'users']" size="6x" style="width: 100%;"/>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>



        <h4 class="mb-5 mt-5">Details</h4>
        <v-row>
          <v-col cols="4" >
            <v-text-field
              v-model="name"
              label="Name"
              :error-messages="name_error"
              outlined
              required
            ></v-text-field>

            <v-textarea
              name="input-7-4"
              v-model="description"
              rows="5"
              label="Beschreibung"
              outlined
              class="bg-white"
            ></v-textarea>

            <v-text-field
              ref="join_link"
              :error-messages="join_link_error"
              v-model="join_link"
              label="Join Link"
              outlined
            ></v-text-field>

            <v-btn
              :loading="isLoading"
              color="info"
              @click="submitForm"
            >
              Speichern
              <template v-slot:loader>
            <span class="custom-loader">
              <v-icon light>mdi-cached</v-icon>
            </span>
              </template>
            </v-btn>
          </v-col>
          <v-col cols="4" >
            <language-select ref="LanguageSelect" :error="language_error"></language-select>
            <category-select ref="CategorySelect" :error="categories_error"></category-select>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </form>
</template>

<script>
import LanguageSelect from "./LanguageSelect";
import CategorySelect from "./CategorySelect";

export default {
  components: {
    LanguageSelect,
    CategorySelect
  },
  data () {
    return {
      isLoading: false,
      isSuccess: false,
      type: '',
      type_error: '',
      errors: [],
      name_error: [],
      name: '',
      description: '',
      join_link: '',
      join_link_error: [],
      language: [],
      language_error: [],
      categories: [],
      categories_error: [],
      hasError: false
    }
  },
  methods: {
    activateType: function (type) {
      this.type = type;
    },
    clearErrors: function (e) {
      this.errors = [];
      this.type_error = '';
      this.join_link_error = [];
      this.language_error = [];
      this.categories_error = [];
      this.name_error = [];
    },
    submitForm: function (e) {

      this.clearErrors();
      this.hasError = false;

      if (!this.type) {
        this.type_error = 'Wähle einen Kanal Typ';
        this.hasError = true;
      }

      if (!this.name) {
        this.name_error = 'Name wurde nicht gesetzt';
        this.hasError = true;
      }

      if (!this.join_link) {
        this.join_link_error = 'Join Link wurde nicht gesetzt';
        this.hasError = true;
      }

      if (!this.$refs.LanguageSelect.value.length) {
        this.language_error = 'Sprache wurde nicht gesetzt';
        this.hasError = true;
      }

      if (!this.$refs.CategorySelect.value.length) {
        this.categories_error = 'Kategorie wurde nicht gesetzt';
        this.hasError = true;
      }

      if (!this.hasError) {

        this.isLoading = true;

        let data = {
          name: this.name,
          type: this.type,
          description: this.description,
          join_link: this.join_link,
          languages: this.$refs.LanguageSelect.value,
          categories: this.$refs.CategorySelect.value
        };

        fetch('https://api.telegram.de/groups', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)

        }).then(async response => {

          if (response.status === 201) {

            this.isSuccess = true;
            window.scrollTo();

          } else {

            this.isSuccess = false;

            let data = await response.json();

            if (typeof data.errors !== 'undefined') {
              this.join_link_error = data.errors.join_link;
            }

            if (typeof data.message !== 'undefined') {
              this.errors.push(data.message)
            }
          }

          this.isLoading = false

        })
        .catch(e => {
          this.errors.push(e)
          this.isLoading = false
        });
      }

      e.preventDefault();
    }
  }
}
</script>

