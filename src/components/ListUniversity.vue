<template lang="html">
  <section class="list-university animated zoomIn fast">
    <h1>Ciência da Computação</h1>
    <br>
    <template>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col"/>
            <th scope="col">#</th>
            <th scope="col">Nome da universidade</th>
            <th scope="col">Categoria administrativa</th>
            <th scope="col">Modalidade de ensino</th>
            <th scope="col">Conceito contínuo</th>
            <th scope="col">Conceito ENADE</th>
            <th scope="col">Ano</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in universityList"
            :key="item.universityName">
            <input
              v-b-tooltip.hover
              :value="item"
              v-model="checkedUniversities"
              :disabled="checkedUniversities.length >= 3 && checkedUniversities.indexOf(item) == -1"
              class="input-checkbox"
              type="checkbox"
              title="Selecione até 3 universidades para comparar">
            <th scope="row">{{ index }}</th>
            <td>{{ item.nome }}</td>
            <td>{{ item.categoriaAdmin }}</td>
            <td>{{ item.modality }}</td>
            <td>{{ item.continuousConcept }}</td>
            <td>{{ item.concept }}</td>
            <td>{{ item.year }}</td>
          </tr>
        </tbody>
      </table>
      <transition
        enter-active-class="animated slideInUp fast"
        leave-active-class="animated slideOutDown faster">
        <div
          v-if="comparable"
          class="btn-compare">
          <button
            type="button"
            class="btn btn-outline-primary">Comparar</button>

        </div>
      </transition>
      <span>{{ checkedUniversities }}</span>
    </template>
    </transition>
  </section>
  </transition-group>

</template>

<script lang="js">
import ApiService from '@/services/ApiService.js';

export default {
  universityName: 'list-university',
  data() {
    return {
      checkedUniversities: [],
      universityList: [],
      items: [{
        universityName: 'Universidade Federal de Campina Grande',
        category: 'Federal',
        modality: 'Presencial',
        continuousConcept: 5.0,
        concept: 5,
        year: 2018,
      },
      {
        universityName: 'Universidade Federal da Paraíba',
        category: 'Federal',
        modality: 'Presencial',
        continuousConcept: 4.64,
        concept: 4,
        year: 2018,
      },
      {
        universityName: 'Universidade Federal de Pernambuco',
        category: 'Federal',
        modality: 'Presencial',
        continuousConcept: 4.02,
        concept: 4,
        year: 2018,
      },
      {
        universityName: 'Universidade Estadual da Paraíba',
        category: 'Federal',
        modality: 'Presencial',
        continuousConcept: 3.97,
        concept: 4,
        year: 2018,
      },
      {
        universityName: 'Faculdade de Ciências Sociais Aplicadas',
        category: 'Privada',
        modality: 'Presencial',
        continuousConcept: 3.40,
        concept: 4,
        year: 2018,
      },
      ],
    };
  },
  created() {
    return ApiService.getUniversitiesByCourse(
      "TECNOLOGIA EM REDES DE COMPUTADORES"
    ).then(response => (this.universityList = response))
    .then(() => console.log(this.universityList));
  },
  computed: {
    selectable() {
      return this.checkedUniversities.length < 3;
    },
    comparable() {
      return this.checkedUniversities.length > 1 && this.checkedUniversities.length <= 3;
    },
  }
};
</script>

<style scoped lang="scss">
.table {
  text-align: center;
}

.input-checkbox {
  margin-top: 18px;
}

.btn-compare {
  width: 100%;
  text-align: center;
}

th {
  color: rgb(5, 47, 82);
}
</style>
