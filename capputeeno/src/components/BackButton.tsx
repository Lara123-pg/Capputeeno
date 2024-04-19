import styled from "styled-components";
import { BackIcon } from "./icons/BackIcon";
import { useRouter } from "next/navigation";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: transparent;
    border: none;
    cursor: pointer;

    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: var(--secondary-text);
`

interface ButtonProps {
    navigate: string;
}

export function BackButton({ navigate }: ButtonProps) {
    const router = useRouter();

    const handleNavigate = () => {
        router.push(navigate)
    }

    return (
        <Button onClick={handleNavigate}>
            <BackIcon /> Voltar
        </Button>
    );
}