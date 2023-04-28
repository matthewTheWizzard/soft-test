import { FC, useState, useRef, RefAttributes } from 'react';
import { OverlayTrigger, Tooltip, TooltipProps } from 'react-bootstrap';
import { AlertCircle, CircleX } from 'tabler-icons-react';
import './Tooltip.scss'

type TooltipType = {
  children: string;
};

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
    setShow(!show);
  };

  return (
    <OverlayTrigger
      show={show ? show : undefined}
      target={target.current}
      placement="bottom-start"
      overlay={renderTooltip}
    >
      <button className="tooltip-btn" onClick={showTooltip}>
        {show ? <CircleX /> : <AlertCircle />}
      </button>
    </OverlayTrigger>
  );
};

export { MyTooltip as Tooltip };
