import { Grid2 } from '@mui/material';
import { IFacture, IFactureItem } from '../data/facture';
import {
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  FormattedTime,
} from 'react-intl';

interface FactureProps {
  facture: IFacture;
}

export default function Facture(props: FactureProps) {
  const soustotal = props.facture.items.reduce(
    (acc, item) => acc + item.prix * item.quantite,
    0
  );
  const taxes = soustotal * 0.15;
  const total = soustotal + taxes;

  return (
    <>
      <h1>
        {' '}
        <FormattedMessage id="facture.nomclient" />
        {props.facture.client}
      </h1>
      <h2>
        <FormattedMessage id="facture.date" />
        <FormattedDate
          value={props.facture.date}
          year="numeric"
          month="long"
          day="2-digit"
        />
      </h2>
      <h2>
        <FormattedMessage id="facture.heure" />
        <FormattedTime value={props.facture.date} />
      </h2>
      <Grid2
        container
        sx={{
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
      >
        <Grid2 container size={12} key={0}>
          <Grid2 size={4}>
            <FormattedMessage id="facture.item" />
          </Grid2>
          <Grid2 size={4}>
            <FormattedMessage id="facture.prix" />
          </Grid2>
          <Grid2 size={4}>
            <FormattedMessage id="facture.quantite" />
          </Grid2>
        </Grid2>
        {props.facture &&
          props.facture.items.map((item: IFactureItem) => (
            <Grid2 container size={12} key={item.id}>
              <Grid2 size={4}>{item.description}</Grid2>
              <Grid2 size={4}>
                <FormattedNumber
                  value={item.prix}
                  style="currency"
                  currency="CAD"
                />
              </Grid2>
              <Grid2 size={4}>{item.quantite}</Grid2>
            </Grid2>
          ))}
        <Grid2 container size={12} key={998}>
          <Grid2 size={4}>&nbsp;</Grid2>
          <Grid2 size={4}></Grid2>
          <Grid2 size={4}></Grid2>
        </Grid2>
        <Grid2 container size={12} key={999}>
          <Grid2 size={4}>
            <FormattedMessage
              id="facture.soustotal"
              defaultMessage="Sous-total"
            />
          </Grid2>
          <Grid2 size={4}>
            <FormattedNumber
              value={soustotal}
              style="currency"
              currency="CAD"
            />
          </Grid2>
          <Grid2 size={4}></Grid2>
        </Grid2>

        <Grid2 container size={12} key={999}>
          <Grid2 size={4}>
            <FormattedMessage id="facture.taxes" defaultMessage="taxes" />
          </Grid2>
          <Grid2 size={4}>
            <FormattedNumber value={taxes} style="currency" currency="CAD" />
          </Grid2>
          <Grid2 size={4}></Grid2>
        </Grid2>
        <Grid2 container size={12} key={999}>
          <Grid2 size={4}>
            <FormattedMessage id="facture.total" defaultMessage="total" />
          </Grid2>
          <Grid2 size={4}>
            <FormattedNumber value={total} style="currency" currency="CAD" />
          </Grid2>
          <Grid2 size={4}></Grid2>
        </Grid2>
      </Grid2>
    </>
  );
}
