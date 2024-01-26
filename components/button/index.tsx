import { Button as RButton } from '@radix-ui/themes'

interface IButton extends React.ComponentProps<typeof RButton> {
    label: string;
}

export default function Button(props: IButton) {
    const { label, } = props;

    return (
        <RButton {...props} >{label}</RButton>
    )
}
