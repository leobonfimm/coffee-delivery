import { useEffect } from 'react'
import { Bank, CreditCard, CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import { RadioInput } from '../../../../components/RadioInput'

import {
  AddressContainer,
  RadioInputsContainer,
  Heading,
  InputsContainer,
  PaymentMethodContainer,
  PersonalInformationContainer,
} from './styles'
import { TextInput } from '../../../../components/TextInput'
import { NewOrderFormData } from '../..'

export function PersonalInformation() {
  const { register, watch, setValue, setError, reset, formState } =
    useFormContext<NewOrderFormData>()

  const { errors } = formState

  const cepInput = watch('cep', 0)
  const selectedPaymentMethod = watch('paymentMethod')

  useEffect(() => {
    if (cepInput && String(cepInput).length === 8) {
      fetch(`https://viacep.com.br/ws/${cepInput}/json/`)
        .then((response) => {
          if (!response.ok) {
            setError('cep', {
              message: 'Não foi possível obter os dados do CEP',
            })
          }

          return response.json()
        })
        .then((data) => {
          if (data.erro) {
            setError('cep', {
              message: 'Não foi possível obter os dados do CEP',
            })
            return
          }

          setValue('street', data.logradouro)
          setValue('neighborhood', data.bairro)
          setValue('city', data.localidade)
          setValue('state', data.uf)
        })
    }

    if (!cepInput || cepInput === 0) reset()
  }, [cepInput, setValue, setError, reset])

  return (
    <PersonalInformationContainer>
      <h2>Complete seu pedido</h2>

      <AddressContainer>
        <Heading variant="yellow">
          <MapPinLine size={22} />

          <div>
            <strong>Endereço de Entrega</strong>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </Heading>

        <InputsContainer>
          <TextInput
            maxLength={8}
            type="text"
            placeholder="CEP"
            error={errors.cep}
            containerProps={{ style: { gridArea: 'cep' } }}
            {...register('cep', { valueAsNumber: true })}
          />

          <TextInput
            type="text"
            placeholder="Rua"
            disabled
            containerProps={{ style: { gridArea: 'street' } }}
            {...register('street')}
          />

          <TextInput
            type="text"
            placeholder="Número"
            containerProps={{ style: { gridArea: 'number' } }}
            {...register('number', { valueAsNumber: true })}
          />

          <TextInput
            type="text"
            placeholder="Complemento"
            isOptional
            containerProps={{ style: { gridArea: 'complement' } }}
            {...register('complement')}
          />

          <TextInput
            type="text"
            placeholder="Bairro"
            disabled
            containerProps={{ style: { gridArea: 'neighborhood' } }}
            {...register('neighborhood')}
          />
          <TextInput
            type="text"
            placeholder="Cidade"
            disabled
            containerProps={{ style: { gridArea: 'city' } }}
            {...register('city')}
          />
          <TextInput
            type="text"
            placeholder="UF"
            disabled
            containerProps={{ style: { gridArea: 'state' } }}
            {...register('state')}
          />
        </InputsContainer>
      </AddressContainer>

      <PaymentMethodContainer>
        <Heading variant="purple">
          <CurrencyDollar size={22} />

          <div>
            <strong>Pagamento</strong>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </Heading>

        <RadioInputsContainer>
          <RadioInput
            isSelected={selectedPaymentMethod === 'credit'}
            value="credit"
            {...register('paymentMethod')}
          >
            <CreditCard size={16} />
            Cartão de crédito
          </RadioInput>
          <RadioInput
            isSelected={selectedPaymentMethod === 'debit'}
            value="debit"
            {...register('paymentMethod')}
          >
            <Bank size={16} />
            Cartão de débito
          </RadioInput>
          <RadioInput
            isSelected={selectedPaymentMethod === 'cash'}
            value="cash"
            {...register('paymentMethod')}
          >
            <CurrencyDollar size={16} />
            Dinheiro
          </RadioInput>
        </RadioInputsContainer>
      </PaymentMethodContainer>
    </PersonalInformationContainer>
  )
}
