import './App.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper>
            <img src="https://flagpedia.net/data/flags/w580/de.png" alt=""></img>
            <h3>Germany</h3>
            <p><b>Polupation:</b> 81,770,900</p>
            <p><b>Region:</b> Europe</p>
            <p><b>Capital:</b> Berlin</p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <img src="https://flagpedia.net/data/flags/w580/us.png" alt=""></img>
            <h3>United States of America</h3>
            <p><b>Polupation:</b> 323,947,000</p>
            <p><b>Region:</b> Americas</p>
            <p><b>Capital:</b> Washington, DC</p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <img src="https://flagpedia.net/data/flags/w580/br.png" alt=""></img>
            <h3>Brazil</h3>
            <p><b>Polupation:</b> 206,135,803</p>
            <p><b>Region:</b> Americas</p>
            <p><b>Capital:</b> Brasilia</p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <img src="https://flagpedia.net/data/flags/w580/is.png" alt=""></img>
            <h3>Iceland</h3>
            <p><b>Polupation:</b> 334,300</p>
            <p><b>Region:</b> Europe</p>
            <p><b>Capital:</b> Reykjavik</p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <img src="https://flagpedia.net/data/flags/w580/af.png" alt=""></img>
            <h3>Afghanistan</h3>
            <p><b>Polupation:</b> 27,657,145</p>
            <p><b>Region:</b> Asia</p>
            <p><b>Capital:</b> Kabul</p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <img src="https://flagpedia.net/data/flags/w580/ax.png" alt=""></img>
            <h3>Aland Islands</h3>
            <p><b>Polupation:</b> 28,875</p>
            <p><b>Region:</b> Europe</p>
            <p><b>Capital:</b> Mariehamn</p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <img src="https://flagpedia.net/data/flags/w580/al.png" alt=""></img>
            <h3>Albania</h3>
            <p><b>Polupation:</b> 2,886,026</p>
            <p><b>Region:</b> Europe</p>
            <p><b>Capital:</b> Tirana</p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <img src="https://flagpedia.net/data/flags/w580/dz.png" alt=""></img>
            <h3>Algeria</h3>
            <p><b>Polupation:</b> 40,400,000</p>
            <p><b>Region:</b> Africa</p>
            <p><b>Capital:</b> Algiers</p>
          </Paper>
        </Grid>            
        </Grid>
    </div>
  );
}

export default App;

