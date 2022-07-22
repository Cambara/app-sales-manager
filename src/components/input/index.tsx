import { INPUT_TYPES } from "../../domain/input-types"
import { InputContent, InputWrapper, Label } from "./style"

interface IProps {
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void
    label: string
    value: string
    placeholderText?: string
    inputTypes?: INPUT_TYPES
  }

const Input:React.FC<IProps> = ({
    label,
    value,
    placeholderText,
    inputTypes,
    handleChange,
}) => {
    return (
        <InputWrapper>
            <Label>
             {label}
            </Label>
            <InputContent
                name={label}
                type={ inputTypes || 'text' }
                value={ value }
                placeholder={ placeholderText || '' }
                onChange={ e => handleChange(e) }
            />
        </InputWrapper>
    )
}

export default Input