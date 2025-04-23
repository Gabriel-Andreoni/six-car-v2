import { Input } from "../Input";
import { Label } from "../Label";

type FormProps = {
    className: string,
    handleForm: (formData: FormData) => void,
}


export function Form({ className, handleForm }: FormProps) {
    return (
        <form
            action={handleForm}
            className={className}>
            <div className="flex flex-col">
                <Label text={'Carro'} htmlFor="car-name" />
                <Input
                    className="h-10 p-4 border border-violet-500 outline-none"
                    name="car-name"
                    id="car-name" />
            </div>
            <div className="flex flex-col">
                <Label text={'Descrição'} htmlFor="car-description" />
                <Input
                    className="h-10 p-4 border border-violet-500 outline-none"
                    name="car-description"
                    id="car-description" />
            </div>
            <div className="flex flex-col">
                <Label text={'Preço'} htmlFor="car-price" />
                <Input
                    className="h-10 p-4 border border-violet-500 outline-none"
                    name="car-price"
                    id="car-price"
                    type="number" />
            </div>
            <div className="flex flex-col">
                <Label text={'Kilometragem'} htmlFor="car-km" />
                <Input
                    className="h-10 p-4 border border-violet-500 outline-none"
                    name="car-km"
                    id="car-km"
                    type="number" />
            </div>
            <div className="flex flex-col">
                <Label text={'Ano do Veículo'} htmlFor="car-year" />
                <Input
                    className="h-10 p-4 border border-violet-500 outline-none"
                    name="car-year"
                    id="car-year"
                    type="number" />
            </div>
            <div className="flex flex-col">
                <Label text={'Localização'} htmlFor="car-location" />
                <Input
                    className="h-10 p-4 border border-violet-500 outline-none"
                    name="car-location"
                    id="car-location"
                />
            </div>
            <div className="flex flex-col">
                <Label text={'Câmbio'} htmlFor="car-gear" />
                <Input
                    className="h-10 p-4 border border-violet-500 outline-none"
                    name="car-gear"
                    id="car-gear"
                />
            </div>
            <div className="flex flex-col">
                <Label text={'Aceita Troca?'} htmlFor="car-exchange" />
                <Input
                    className="h-10 p-4 border border-violet-500 outline-none"
                    name="car-exchange"
                    id="car-exchange"
                />
            </div>
            <div className="flex flex-col">
                <Label text={'Licenciamento e IPVA Pago?'} htmlFor="car-taxes" />
                <Input
                    className="h-10 p-4 border border-violet-500 outline-none"
                    name="car-taxes"
                    id="car-taxes"
                />
            </div>
            <div className="flex flex-col">
                <Label text={'Imagens'} htmlFor="car-images" />
                <Input
                    className="h-10 pt-4 pb-10 pl-4 border border-violet-500 outline-none"
                    name="car-images"
                    id="car-images"
                    type="file"
                    multiple={true}
                    required={true}
                />
            </div>

            <button className="w-full p-4 bg-violet-500 text-white">Cadastrar Veículo</button>
        </form>
    )
}