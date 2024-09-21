import React from "react"
import { useFormContext, Controller } from "react-hook-form"
import { type E164Number, isValidPhoneNumber } from "libphonenumber-js"
import i18nIsoCountries from "i18n-iso-countries"
import enCountries from "i18n-iso-countries/langs/en.json"
import PhoneInput, { type Country } from "react-phone-number-input/input"
import { Input } from "@/components/ui/input"

i18nIsoCountries.registerLocale(enCountries)

interface PhoneInputFieldProps {
  name: string
  placeholder?: string
}

export const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  name,
  placeholder,
}) => {
  const { control, setError, clearErrors } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      defaultValue="+27" // Default South African country code
      rules={{
        validate: (value) =>
          isValidPhoneNumber(value) || "Invalid phone number",
      }}
      render={({ field: { onChange, value } }) => {
        const phoneNumber = value as E164Number | undefined

        const handlePhoneChange = (newPhoneNumber: E164Number | undefined) => {
          const phoneString = newPhoneNumber || ""
          onChange(phoneString)

          if (phoneString && !isValidPhoneNumber(phoneString)) {
            setError(name, { type: "manual", message: "Invalid phone number" })
          } else {
            clearErrors(name)
          }
        }

        return (
          <div className="background-primary flex gap-2">
            <PhoneInput
              international
              withCountryCallingCode
              country={"ZA" as Country}
              value={phoneNumber}
              inputComponent={Input}
              placeholder={placeholder ?? ""}
              onChange={handlePhoneChange}
              autoComplete="tel"
            />
          </div>
        )
      }}
    />
  )
}
