import * as React from 'react';

import { Form, Radio, Select } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { observer } from 'mobx-react';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

interface IDemoFormProps extends FormComponentProps {
    formData?: any;
    fields?: any;
}

@observer
class DemoForm extends React.Component<IDemoFormProps, any> {
    public render() {
        const {
            form,
            formData: { radioDisabled }
        } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Form>
                <FormItem label="select">
                    {getFieldDecorator('select')(
                        <Select>
                            <Option value="enabled">enabled</Option>
                            <Option value="disabled">disabled</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem label="radio">
                    {getFieldDecorator('radio')(
                        <RadioGroup disabled={radioDisabled}>
                            <Radio value={1}>1</Radio>
                            <Radio value={2}>2</Radio>
                            <Radio value={3}>3</Radio>
                            <Radio value={4}>4</Radio>
                        </RadioGroup>
                    )}
                </FormItem>
            </Form>
        );
    }
}

export default observer(
    Form.create({
        mapPropsToFields(props: IDemoFormProps) {
            const { fields } = props;
            return fields;
        },
        onFieldsChange(props, changedFields) {
            console.log('onFieldsChange', props, changedFields);
            const { formData } = props;
            Object.keys(changedFields).forEach((filedName) => {
                formData.setField(filedName, changedFields[filedName].value);
            });
        },
        onValuesChange(_, values) {
            console.log('onValuesChange', values);
        }
    })(DemoForm)
);
