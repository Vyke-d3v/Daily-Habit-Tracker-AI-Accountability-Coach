import { Card, CardTitle, Description } from "@heroui/react"


export default function Card_004(){
    return(
        <>
        <div>
            <Card className="rounded-2xl bg-(--color-blaze-bg) shadow-2xl-(--color-blaze-ember) border ">
                <CardTitle className="bg-(--color-blaze-ink) rounded-sm w-6 h-6">l</CardTitle>
                <Description className="flex wrap-break-word">You have completed your reading habit 6 days <br /> in a row. Want to protect that Streak with a lighter 10-pages goal today?</Description>
            </Card>
        </div>
        </>
    )
}