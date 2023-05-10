import { ReactNode } from 'react';

interface IFlatList<T> {
    data: T[];
    keyExtractor: (item: T) => string;
    renderItem: (item: T) => ReactNode;
}

const FlatList = <T extends {}>({ data, renderItem, keyExtractor }: IFlatList<T>) => {
    return (
        <div>
            {data.map(item => (
                <div key={keyExtractor(item)}>
                    {renderItem(item)}
                </div>
            ))}
        </div>
    )
}

const List = () => {
    return (
        <div>
            <FlatList<number>
                data={[1, 2, 3, 4]}
                keyExtractor={(num) => num.toString()}
                renderItem={(num) => (
                    <span>{num}</span>
                )}
            />
            <FlatList
                data={[
                    {
                        id: 1,
                        title: "a"
                    },
                    {
                        id: 2,
                        title: "b"
                    }
                ]}
                keyExtractor={({ id }) => id.toString()}
                renderItem={({ id, title }) => (
                    <>
                        <span>{id}. </span>
                        <span>{title}</span>
                    </>
                )}
            />
        </div>
    )
}

export default List