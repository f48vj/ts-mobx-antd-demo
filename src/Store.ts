import { observable } from 'mobx';
import FormData from './FormData';

export default class Store {
    @observable public formData = new FormData();
}