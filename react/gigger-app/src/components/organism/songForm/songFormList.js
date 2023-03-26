import {formTypes} from '../../../config/formTypes'

export const songFormList = [
    {
        name: 'Song Title',
        inputType: formTypes.TEXT,
        placeholder: 'Song Title',
        required: true,
        value: '',

    },
    {
        name: 'Band Name',
        inputType: formTypes.TEXT,
        placeholder: 'Band Name',
        required: true,
        value: '',
    },
    {
        name: 'Tag Styles',
        inputType: formTypes.TAGS_STYLES,
        placeholder: 'Styles',
        required: true,
        value: '',
    },
    {
        name: 'Duration',
        inputType: formTypes.TIME,
        required: true,

    },
    {
        name: 'Enviar',
        inputType: formTypes.SUBMIT,
        required: true,

    }

]