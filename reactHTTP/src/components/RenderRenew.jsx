export const RenderRenew = ({ requestGet }) => {
    return (
        <div className="header">
            <p>Обновить</p>
            <button className="renew-button" onClick={() => requestGet()}></button>
        </div>
    )
}