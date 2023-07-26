import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";

export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '10px 20px',
            backgroundColor: theme?.colors.gray500.value
        }}>
            <Image
                alt="Logo Ditto"
                src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
                width={70}
                height={70}
                priority={true}
            />
            <Text h2 style={{ lineHeight: '0', margin: '0' }}>P</Text>
            <Text h3 style={{ margin: '0' }}>okémon</Text>

            <Spacer css={{ flex: 1 }} />

            <Text>Favoritos</Text>
        </div>
    )
}
