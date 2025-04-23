import { reqAPI } from "../actions/reqAPI";
import { Form } from "../components/Form";

export default function Dashboard() {
    const handleForm = async (formData: FormData) => {
        "use server";
        
        reqAPI(formData);
    }

    return (
        <div>
            <Form
                handleForm={handleForm}
                className="w-full p-4 flex flex-col gap-4 "
            />
        </div>
    )
}