interface InputProps {
    className?: string,
    type?: string,
    name: string,
    id: string
    multiple?: boolean,
    required?: boolean
}

export function Input({ id, className, type, name, multiple, required }: InputProps) {
    return (
        <input
        className={className}
        type={type}
        name={name}
        id={id}
        multiple={multiple}
        required={required}
        />
    )
}