import {formTypes} from '../../../config/formTypes'

export const songFormList = [
    {
        id:'song-title',
        name: 'Song Title',
        inputType: formTypes.TEXT,
        placeholder: 'Song Title',
        required: true,

    },
    {
        id:'band-name',
        name: 'Band Name',
        inputType: formTypes.TEXT,
        placeholder: 'Band Name',
        required: true,
    },
    {
        name: 'Tag Styles',
        inputType: formTypes.TAGS_STYLES,
        placeholder: 'Styles',
        required: true,
    },
    {
        id: 'duration',
        name: 'Duration',
        inputType: formTypes.TIME,
        required: true,

    },
    {
        id: 'submit-button',
        name: 'Enviar',
        inputType: formTypes.SUBMIT,
        required: true,

    }

]