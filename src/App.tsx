import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const AppBarButton = (props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => (
    <button {...props} className={`${props.className || ""} hover:bg-gray-100 h-full w-10`}/>
);

const AppBar = ({title}: {title: string}) => (
    <div className="w-full flex items-center h-10 draggable text-sm">
        <span className="ml-4">{title}</span>
        <div className="ml-auto flex items-center undraggable h-full">
            <AppBarButton onClick={window.Main.Minimize}>&#8211;</AppBarButton>
            <AppBarButton onClick={window.Main.Close}>&#10005;</AppBarButton>
        </div>
    </div>

);

function App() {
    return (
        <>
            <AppBar title="dotTodo"/>
        </>
    );
}

export default App;
