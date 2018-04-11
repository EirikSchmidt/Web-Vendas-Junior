 $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Por favor, forneça seu primeiro nome'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Por favor, forneça seu sobrenome'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Por favor forneça o seu endereço de e-mail'
                    },
                    emailAddress: {
                        message: 'Por favor, forneça um endereço de email válido'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Por favor, forneça seu número de telefone'
                    },
                    phone: {
                        country: 'BR',
                        message: 'Por favor, forneça um número de telefone válido com código de área'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 10,
                    },
                    notEmpty: {
                        message: 'Por favor, forneça seu endereço'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 5,
                    },
                    notEmpty: {
                        message: 'Por favor, forneça sua cidade'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Por favor, selecione seu estado'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Por favor, forneça seu CEP'
                    },
                    zipCode: {
                        country: 'BR,
                        message: 'Por favor, forneça um código postal válido'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Por favor, insira pelo menos 10 caracteres e não mais que 200'
                    },
                    notEmpty: {
                        message: 'Por favor, forneça uma descrição do seu projeto'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") 
                $('#contact_form').data('bootstrapValidator').resetForm();

            
            e.preventDefault();

         
            var $form = $(e.target);

            var bv = $form.data('bootstrapValidator');

            
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});
