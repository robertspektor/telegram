<template>
  <div class="faq-component mini-spacer bg-extra-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <h2 class="section-title font-weight-medium mb-15">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="float-right">
            <img class="img-responsive" src="@/assets/images/320x612.png" alt="Telegram Messanger">
          </div>
        </div><!-- col-lg-6 -->

        <!-- ACCORDION -->
        <div class="col-lg-6 faq">
          <div class="accordion">
            <div class="accordion-group" v-for="index in list" :key="index._id">
              <div class="accordion-heading" @click="toggleAccordion(index._id)">
                <a class="accordion-toggle">
                  <fa :icon="['fas', index.icon]" size="2x" /> {{ index.title }}
                </a>
              </div>
              <div v-show="accordionId === index._id">
                <div class="accordion-inner">
                  <p>{{ index.text }}</p>
                </div>
              </div>
            </div>
          </div><!-- Accordion -->
        </div><!-- col-lg-6 -->
      </div><!-- row -->
    </div><!-- container -->
    <br>
    <br>
  </div>
</template>
<script>
export default {
  name: "Faq",
  data() {
    return {
      accordionId: 0,
      list: [
        {
          _id: 1,
          title: 'Was ist Telegram?',
          icon: 'gem',
          text: 'Telegram ist wie SMS, nur mächtiger. Du kannst Nachrichten, Fotos, Videos und Dokumente an Leute aus deinem Telefonbuch schicken (wenn sie auch Telegram haben). Außerdem kannst du Gruppen für bis zu 200.000 Leuten erstellen.'
        },
        {
          _id: 2,
          title: 'Wer sind die Leute hinter Telegram?',
          icon: 'thumbs-up',
          text: 'Die Köpfe hinter Telegram sind Pavel und Nikolai Durov, die Gründer von VK, einem großen europäischen Netzwerk. Während Pavel sich um die Business-Seite kümmert, ist Nikolai für die technische Konzeption verantwortlich. Um Telegram zu realisieren, hat er ein einzigartiges Datenprotokoll entwickelt, was offen, sicher und dafür optimiert ist mit multiplen Datenzentren zu arbeiten. Das Resultat: Telegram ist der schnellste, sicherste und einfachste Nachrichtendienst für alle.'
        },
        {
          _id: 3,
          title: 'Seit wann gibt es Telegram?',
          icon: 'phone',
          text: 'Telegram wurde am 14. August 2013 für das iPhone veröffentlicht. Die erste Version für Android gibt es seit dem 20. Oktober 2013. Telegram verfolgt eine Open Source Philosophie und freut sich, dass Entwickler aus aller Welt dazu beitragen.'
        },
        {
          _id: 4,
          title: 'Welche Geräte werden unterstützt?',
          icon: 'gem',
          text: 'Telegram ist verfügbar für iPhones (iOS 8 und höher) und Android (ab 4.1) und Windows Phones. Es funktioniert aber auch auf Tablets und iPads. Es gibt außerdem ein paar inoffizielle Apps sowie eine Web Version. Für Entwickler stellt Telgram APIs zur Verfügung, damit noch mehr Apps und andere Plattformen gebaut werden können.'
        }
      ]
    };
  },
  methods: {
    toggleAccordion(accordionId) {
      if (accordionId === this.accordionId) {
        this.accordionId = 0;
        return;
      }

      this.accordionId = accordionId;
    },
  },
};
</script>
