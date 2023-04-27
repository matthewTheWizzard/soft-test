import { FC, useState, useRef, RefAttributes } from 'react'
import { OverlayTrigger, Tooltip, TooltipProps } from 'react-bootstrap'

type TooltipType = {
  children: string,
}

const MyTooltip: FC<TooltipType> = ({ children }) => {
  const [show, setShow] = useState(false);
  const target = useRef(undefined);

  const renderTooltip = (
    props: JSX.IntrinsicAttributes &
      TooltipProps &
      RefAttributes<HTMLDivElement>
  ) => (
    <Tooltip id="button-tooltip" {...props}>
      {children}
    </Tooltip>
  );

  const showTooltip = () => {
    setShow(!show)
  }

  return (
    <OverlayTrigger
      show={show ? show : undefined}
      target={target.current}
      onToggle={showTooltip}
      placement="bottom"
      overlay={renderTooltip}
    >
      <button onClick={showTooltip}>x</button>
    </OverlayTrigger>
  );
}

export { MyTooltip as Tooltip };