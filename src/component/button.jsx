
export function Button({
    dis, children, onClick
}) {
    return (
        <button
            onClick={onClick}
           
            className={`flex justify-center items-center cursor-pointer h-[50px] w-[230px] rounded-2xl ${dis?'bg-green-300':' bg-blue-300'}`}
        >
            {children}
        </button>
    )
}