import { Select as RSelect } from '@radix-ui/themes'

export type SelectOption = {
    value?: string;
    label?: string;
    seperator?: boolean;
    group?: {
        label?: string;
        items: SelectOption[];
    }
}

interface ISelect {
    defaultValue?: string;
    options: SelectOption[];
    placeholder?: string;
    block?: boolean;
}

export default function Select(props: ISelect) {

    const { defaultValue, options, placeholder, block } = props;

    return (
        <RSelect.Root defaultValue={defaultValue} >
            <RSelect.Trigger placeholder={placeholder} className={`${block ? "w-full" : "!min-w-32"}`} />
            <RSelect.Content>
                {
                    options?.map((item, index) => {
                        if (item.seperator) {
                            return <RSelect.Separator key={index} />
                        }

                        if (item.group) {
                            return (
                                <RSelect.Group key={index} >
                                    <RSelect.Label>{item.group.label}</RSelect.Label>
                                    {
                                        item.group.items.map((groupItem, groupIndex) => {
                                            return <RSelect.Item key={groupIndex} value={groupItem.value || ""}>{groupItem.label}</RSelect.Item>
                                        })
                                    }
                                </RSelect.Group>
                            )
                        }

                        return <RSelect.Item key={index} value={item.value || ""}>{item.label}</RSelect.Item>
                    })
                }


            </RSelect.Content>


        </RSelect.Root>
    )
}
