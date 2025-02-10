import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface MarketComparisonTableProps {
  markets: Array<{
    country: string
    flag: string
    demandGrowth: number
    marketplaceTraffic: number
    entryCost: string
    competition: string
    regulations: string
  }>
}

export function MarketComparisonTable({ markets }: MarketComparisonTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>País</TableHead>
          <TableHead>Crecimiento de Demanda</TableHead>
          <TableHead>Tráfico Marketplace</TableHead>
          <TableHead>Costo de Entrada</TableHead>
          <TableHead>Competencia</TableHead>
          <TableHead>Regulaciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {markets.map((market) => (
          <TableRow key={market.country}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <span>{market.flag}</span>
                <span>{market.country}</span>
              </div>
            </TableCell>
            <TableCell>{market.demandGrowth}%</TableCell>
            <TableCell>{market.marketplaceTraffic}%</TableCell>
            <TableCell>{market.entryCost}</TableCell>
            <TableCell>{market.competition}</TableCell>
            <TableCell>{market.regulations}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
} 