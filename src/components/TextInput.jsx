import './TextInput.css'

export default function TextInput({
  placeholder = 'Texto',
  value = '',
  onChange,
  mode = 'Light'
}) {
  return (
    <div className="text-input-container">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="text-input-field"
      />
    </div>
  )
}