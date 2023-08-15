import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { ResponsiveRadialBar } from '@nivo/radial-bar'
import { radData as data } from "../data/mockData";

const Rad = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveRadialBar
        data={data}
        valueFormat=">-.2f"
        innerRadius={0.45}
        padding={0.4}
        cornerRadius={2}
        margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
        enableRadialGrid={false}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        labelsSkipAngle={15}
        labelsTextColor={{ theme: 'labels.text.fill' }}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 80,
                translateY: 0,
                itemsSpacing: 6,
                itemDirection: 'left-to-right',
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'square',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export default Rad