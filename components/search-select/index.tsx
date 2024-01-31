import Select, { ISelect } from "@components/select";

interface ISearchSelectProps extends ISelect {
}


export default function SearchSelect(props: ISearchSelectProps) {

    const { className } = props;

    return (
        <Select {...props} className={`search-select !p-8 !rounded-3xl !text-2xl ${className}`} />
    )
}
