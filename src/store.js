import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		universities: [],
		stateList: [
		{
			value: 'Paraíba',
			text: 'Paraíba',
		},
		{
			value: 'Pernambuco',
			text: 'Pernambuco',
		},
		{
			value: 'Ceará',
			text: 'Ceará',
		}],
		cityList: [
		{
			value: 'Campina Grande',
		},
		{
			value: 'Recife',
		},
		{
			value: 'Ceará',
		}],
		categoryList: [
		{
			value: 'Federal',
		},
		{
			value: 'Estadual',
		},
		{
			value: 'Privada',
		}],
		modalityList: [
		{
			value: 'Presencial',
		},
		{
			value: 'Educação à Distância',
		},
		],
		yearList: [
		{
			value: 2017,
		},
		{
			value: 2016,
		},
		{
			value: 2015,
		},
		]
	},

	mutations: {

	},
	actions: {

	}
})
