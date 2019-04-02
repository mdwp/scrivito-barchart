import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('BarChartWidget', {
    title: 'Bar Chart',

    attributes: {

        type: {
            title: 'Bar Chart Type',
            description: 'Default: Simpe Bar Chart',
            values: [
                { value: 'simple', title: 'Simple' },
                { value: 'stacked', title: 'Stacked' },
                { value: 'mixed', title: 'Mixed' },

            ],
        },
        label1: { title: 'Label for value 1' },
        label2: { title: 'Label for value 2' },
        label3: { title: 'Label for value 3' },
        items: {
            title: 'Bar Values',
        },
    },
    properties: [
        'type',
        'label1',
        'label2',
        'label3',
        'items',
    ],
    initialContent: {
        type: 'simple'

    },
});