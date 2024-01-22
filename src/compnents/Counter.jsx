import Button from "./Button";
import Count from "./Count";


export default function Counter({ count, id, increment, deccrement }) {

    return (
        <div
            className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <Count count={count} />
            <div className="flex space-x-3">

                <Button handler={()=>increment(id)}>Increment</Button>
                <Button handler={()=>deccrement(id)}>Decrement</Button>
            </div>
        </div>
    )
}
