<template>
  <v-row class="bg-extra-light">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-alert
            prominent
            type="error"
          >
            <v-row align="center">
              <v-col class="grow">
                <strong>ACHTUNG:</strong><br/>
                <p class="mb-1">Dies ist keine offizielle Seite des Telegram Messenger.</p>
                <p class="mb-1">Bitte keine Supportanfragen.</p>
                <p>Ich bin kein Betreiber des Telegram Messenger.</p>
              </v-col>
            </v-row>
          </v-alert>
          <h1 class="ui-title mb-1">Impressum</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">

          <h4>Seitenbetreiber der deutschen Telegram <strong>Fanseite</strong></h4>
          <p>Robert Zimmermann<br />
            Grasehorstweg 11<br />
            12589 Berlin<br />
          </p>
          <p>E-Mail: mail@zimrob.de</p>
          <v-alert
            dense
            outlined
            type="error"
          >
            Bitte nur Kontakt aufnehmen, wenn es um die deutsche Telegram Fanseite geht.
          </v-alert>
          <h4>Quellenangaben für die verwendeten Bilder und Grafiken:</h4>
          <p><a href="http://telegram.org" >http://telegram.org</a></p>
          <p> </p>
          <p>Quelle: <i><a rel="nofollow" href="http://www.e-recht24.de/impressum-generator.html">http://www.e-recht24.de</a></i></p>

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h3 id="disclaimer">Ihr persönlicher Disclaimer:</h3><h1>Haftungsausschluss (Disclaimer)</h1>
          <p><strong>Haftung für Inhalte</strong></p> <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p> <p><strong>Haftung für Links</strong></p> <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p> <p><strong>Urheberrecht</strong></p> <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p><p> </p>
          <p><i>Quellverweis: <a rel="nofollow" href="http://www.e-recht24.de/muster-disclaimer.html" target="_blank">eRecht24 Disclaimer</a>, <a rel="nofollow" href="http://www.e-recht24.de/muster-disclaimer.html" target="_blank">Disclaimer eRecht24</a></i></p>
          <br/>
          <br/>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
import FormBanner1 from "../components/custom/form-banner/FormBanner1";
import Feature from "../components/custom/features/Feature";
import About from "../components/About";
import ShowCase from "../components/ShowCase";
import Jumbotron from "../components/Jumbotron";
import Faq from "../components/Faq";
import C2a2 from "../components/custom/c2a/C2a2";
export default {
  head() {
    return {
      title: "Telegram: Impressum"
    };
  },

  data() {
    return {};
  },
  components: {
    C2a2,
    Faq,
    Jumbotron,
    ShowCase,
    About,
    Feature,
    FormBanner1
  },
};
</script>
