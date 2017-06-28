import template from './template.mustache'

const html = template.render({name: 'John Doe'}).trim()

export default html
