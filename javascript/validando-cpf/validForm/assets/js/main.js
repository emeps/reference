class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.events();
    }
    events(){
        this.formulario.addEventListener('submit', e=>{
            this.handleSubmit(e)
        })
    }
    handleSubmit(e){
        e.preventDefault()
        const validFields = this.fieldIsValid()
        const validPassword = this.passswordIsValid()
        if(validFields && validPassword){
            alert('Formulario enviado')
            this.formulario.submit()
        }
    }
    passswordIsValid(){
        let valid = true 

        const password = this.formulario.querySelector('.senha')
        const repeatPassword = this.formulario.querySelector('.repetir-senha')
        if(password.value !== repeatPassword.value){
            valid = false
            this.createError(password, 'As senhas não batem')
        }
        if(password.value.length <6 || password.value.length > 12){
            valid = false
            this.createError(password, 'Senha curta demais.')
        }

        return valid
    }
    fieldIsValid(){
        let valid = true
        for( let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove()
        }
        for(let field of this.formulario.querySelectorAll('.validar')){
            const label = field.previousElementSibling.innerText
            if(!field.value){
                this.createError(field,`${label} field is not defined`)
                valid = false
            }
            if(field.classList.contains('cpf')){
                if(!this.validaCPF(field)) valid = false
            }
            if(field.classList.contains('usuario')){
                if(!this.validaUsuario(field)) valid = false
            }
        }
        return valid
    }
    validaCPF(field){
        const cpf = new ValidaCPF(field.value)
        if(!cpf.valida()){
            this.createError(field, 'CPF Invalido')
        }
        return true
    }
    createError(field, msg){
        const div = document.createElement('div')
        div.innerHTML = msg 
        div.classList.add('error-text')
        field.insertAdjacentElement('afterend',div)

    }
    validaUsuario(field){
        const usuario = field.value
        let valid = true
        if(usuario.length < 3 || usuario.length > 12){
            this.createError(field, 'O usuario deve conter no minimo 3 caracteres e no maximo que 12 caracteres')
            valid = false
        }
        if(!usuario.match(/[a-zA-Z0-9]+/g)){
            this.createError(field, 'O usuario deve somente conter letras e numeros')
            valid = false
        }
        return true
    }
}
const valida = new ValidaFormulario()