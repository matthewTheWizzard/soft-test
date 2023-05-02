import { FC, useState, useRef, RefAttributes } from 'react';
import { OverlayTrigger, Tooltip, TooltipProps } from 'react-bootstrap';
// import { AlertCircle, CircleX } from 'tabler-icons-react';
import { ReactComponent as IconX } from '../../assets/cross.svg'
import { ReactComponent as IconInfo } from '../../assets/info.svg'
import './Tooltip.scss';

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
        {show ? <IconX className="icon" /> : <IconInfo className="icon" />}
      </button>
    </OverlayTrigger>
  );
};

export { MyTooltip as Tooltip };
