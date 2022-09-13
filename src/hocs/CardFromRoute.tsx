import React from 'react';

function CardFromRoute({ route }: CardFromRouteProps) {
    return (
        <div>{route}</div>
    );
}

export default CardFromRoute;

interface CardFromRouteProps {
    route: string
}
