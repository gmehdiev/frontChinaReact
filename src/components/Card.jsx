import React, { useEffect, useState } from "react";
import '../styles/Card.css'
import CardList from "./CardList";
import FirstCardLine from "./FirstCardLine";

import axios from 'axios'
const Card = function (prop){
  const PHOTO = {
    'riolegendsSticker' : 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OHBfm8Svo6JmIWMkvnwIITdl3lW7Yt03L-ToN7xiVG1_0RlYD31JI-UdwE5YFrQrge8wb-705Ht75WYzCRnpGB8skhfOm2e/360fx360f',
    'riocontendersSticker':'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OHBfm8Svo6Jl4-Fg_L6N77DhVRd6dd2j6eSpYmsiQOy_xJvYDr6LdDGcwJoZ12Frwe6wefog8To7sjMwXpg6SZ2-z-DyORUYc3P/360fx360f',
    'riochallengersSticker':'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OHBfm8Svo6Jl4iKm_vxPbzUhHhu5MRjjeyP8dSn3w218xZpZmGgI9LBIwQ_MlCGqVbqlLzqjJDo78ibwHBgvnQhs2GdwUJEwzlANg/360fx360f',
    'riolegendsAutograph':'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OHBfm8Svo6Jk5KEgufLP77Wk2VV-_p9i_vG8MLz2ADl_BZsNmvxJdSWc1c8YQ2B-Vm3lOy61p_vtJjMySBkvHVw7XnfgVXp1m3zeSzp/360fx360f',
    'riochallengersAutograph':'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OHBfm8Svo6Jk5KEgufLMLPQmmdU5sJ0mPr--Y3nj1H68kU9MWmhLdOXcgM5ZgzYqwe7k-bq0MS5uZSdzXBjuXEltymPzRHmhQYMMLKojvp-0g/360fx360f',
    'riocontendersAutograph':'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OHBfm8Svo6Jk5KEgufLMLTfgm5f7MBjmdbN9J7yjRrj-0NuNm36coeXe1Q-ZwvS-1S3w7rqhpe0usjBy3A3uCIk7S7fmEG-n1gSOdM5tOii/360fx360f',
    'riochampionsAutograph':'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OHBfm8Svo6Jk5KEgufLMLPQm3tY58titeXA54vwxlLl80Y5MGv3d4SQegc6YVvVq1Lrlb--jcTutMvIn3FnuXVxsy2OyRypwUYbBuBMdY0/360fx360f',
    'antwerplegendsSticker':'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7PLGZSpH_szkxNLZqPvxNL7fknhu5MRjjeyP8Y333wOx_EI4ZWCmcoWXIQ4-NAuD-1C-kuy9gZ7uuZ-dznBq6HIrt2GdwUJ3KamKdA/360fx360f',
    'antwerpcontendersSticker':'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7PLGZSpH_szkxNLZqPT7Pa_UmG9U-tZOhujT8om72VGx-0RqZTigd4TGIQ5oMgnZqwS-kr_qhZO1vZjPyXRm7CEr5HyJlwv3309YZDeTow/360fx360f',
    'antwerpchallengersSticker':'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7PLGZSpH_szkxNLZqPT8Mrfdk2VW7dditeXA54vwxgLsrRc9ZWDxJIScdVQ7NwvT_1nsyL-6gsO97sjIzCcxuyQq4HnamRapwUYblVqwxFk/360fx360f',
    'antwerplegendsAutograph':'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7PLGZSpH_szkxNLZqPDmPK7BqWdU78B_jvr--Y3nj1H6_kdla2_0cYWUcQRsaVrZ-1Lvw-_o1pe47c7BwHpk6HEkt3-MnEa2iAYMMLJsjGVl3A/360fx360f',
    'antwerpchallengersAutograph':'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7PLGZSpH_szkxNLZqPDmPK7BqWhZ6cl9j-fG8J7mt1i1uRQ5fWzyJNLGJgdsN1qCqAS9kuzog5buusvNyXIysih243zbykDm00waP-VxxavJF9VsjpQ/360fx360f',
    'antwerpcontendersAutograph':'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7PLGZSpH_szkxNLZqPDmPK7BqWhe5tF0hO3E55_KhFWmrBZyY2Cgd4TDc1A3MA2G8ljryevmjJG5v57JmnoyvSMqsXeJnRPkhBtIbfsv26Jpa8aQxw/360fx360f',
    'antwerpchampionsAutograph':'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7PLGZSpH_szkxNLZqPDmPK7BqWhZ6chhg-bP5rP5iUazrl1vNmzyJ9CVcVVsaVGB_VC3k-3sjZa_tZTNwSdkvCkq5iqMmEC1100fcKUx0r9DH9yk/360fx360f',
  }

  const NAME = {
    'legendsSticker':'legends sticker ',
    'contendersSticker':'contenders sticker ',
    'challengersSticker':'challengers sticker ',
    'legendsAutograph':'legends autograph ',
    'challengersAutograph':'challengers autograph ',
    'contendersAutograph':'contenders autograph ',
    'championsAutograph':'champions autograph ',

  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
      axios
        .get("http://localhost:3001/capsules")
        .then((response) => {
          const data = response.data.filter((e) => e.capsuleNameEN === prop.capsuleName && e.majorName === prop.selectedMajor);
          setPosts(data);
          // console.log(!!photo[prop.selectedMajor+prop.capsuleName]);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [prop.selectedMajor]);
    
   const handleSort = (property) => {
    setPosts([...posts].sort((a, b) => b[property] - a[property]));
  };

    return(
        <div className="card">
        <div className="cardInfo">
          <div className="cardPhoto"><img src={PHOTO[prop.selectedMajor+prop.capsuleName] || 'https://sun9-66.userapi.com/impg/p4Jm4GGLgzj7V_CBXs174CM2UthDs7_Dsb3kMg/s-HdxzvSQDk.jpg?size=457x406&quality=96&sign=42d5a74a3318276f7c09291dcbb80c77&type=album'} alt="../img/steam.jpg"/></div>
          <div className="cardName">{prop.selectedMajor + ' ' + NAME[prop.capsuleName] + 'capsule'}</div>
        </div>
        <div className="list">
        <FirstCardLine onSort={handleSort} />
        {posts.map(post =>
                    <CardList post={post}  key={post["_id"]}/>
                )
                }
        </div>
      </div>

    )
}


export default Card;