import { Form } from 'antd';
import { action, computed, observable, reaction } from 'mobx';

export default class FormData {
    @observable public select = 'enabled';
    @observable public radio = 1;
    @computed
    public get radioDisabled() {
        return this.select === 'disabled';
    }

    @computed public get fields() {
        return {
            radio: Form.createFormField({ value: this.radio }),
            select: Form.createFormField({ value: this.select })
        }
    }

    constructor() {
        reaction(() => this.select, (select) => {
            if (select === 'disabled') {
                this.setRadio(4);
            }
        })
    }

    @action public setRadio(radio: number) {
        this.radio = radio;
    }

    @action public setField(fieldName: any, value: any) {
        this[fieldName] = value;
    }
}
