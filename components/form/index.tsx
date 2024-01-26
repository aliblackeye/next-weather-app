
interface IForm {
    name: string;
    children: React.ReactNode;
    onSubmit: (values: Record<string, any>) => void;
    className?: string;
}

export default function Form(props: IForm) {

    // Destructing
    const { children, onSubmit, className, name } = props;

    // Functions
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(Object.fromEntries(new FormData(e.currentTarget) as any));
    }

    return (
        <form
            name={name}
            className={`${className}`}
            onSubmit={handleSubmit}>{children}</form>
    )
}
