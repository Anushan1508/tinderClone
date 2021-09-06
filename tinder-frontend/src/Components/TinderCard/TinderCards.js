import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Sunder Pichai",
      url: "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
    },
    {
      name: "Elon Musk",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
    },
    {
      name: "Bill Gates",
      url: "https://yt3.ggpht.com/KyXAUjlAH_yiPIv9g8H_0dpP1_iRIqFiKudBzLHhyBhKQ65OgqHJQPz5MB9Dy-Gm0MOUlHcxjg=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Anushan Santhirakumar",
      url: "https://media-exp1.licdn.com/dms/image/C5603AQEtH8WxomIXvg/profile-displayphoto-shrink_800_800/0/1628754446701?e=1635379200&v=beta&t=Ov0P1twAOqiwB944FaO33p9vMMDJKAS-a_ULDObDLNw",
    },
    {
      name: "Abdul Kalam",
      url: "https://cdn.britannica.com/56/148856-004-2F59E2D9/APJ-2008.jpg",
    },
    {
      name: "Steave Jobs",
      url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUREhgVERUYGBgYGhgaGBkYGBgYGBgaGBgZGRgZGBgcIS4lHB4rIRgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCs0MTQ0NDQ0NDQ0NDQ1NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAN0A5AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQUGAgMEBwj/xABAEAACAQIEAwYEBQIDBgcAAAABAgADEQQSITEFQVEGImFxgZEHE6GxFDJCwfDR4SNSchUkQ2KCkhYzU6KywvH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAiEQEBAQEAAgMAAgMBAAAAAAAAAQIRAyESMUEiURMyYUL/2gAMAwEAAhEDEQA/APH4Rwm6BCEIBCEISIQjAhBRztwnDnqC/wCVebGT/D+AqfyoznqdF9pTXkzlfOLpUwhPI+0Cs9Ew/Z5yfyqNL+H0nQeyxc2YIT0PKZf55/S/+GvM4S74/scRchCLf5dR7StY7gtSkdrj6+omufLmq68eso2ELQmrMRRwgKEcIChHFKghCEAijhAUI4oSIQhAcIRwgQhCAQhAQBVvoJJYPDBNW1J/Tb7zPAYUWU7lj7DlLLwPhoer3v0nNtpbkLzDyeT8jTGe1IdnuCmp3635f0rbSWpVWmtkUAR0AALAAWm00CwnJbbXZMyRqSoXNjtry6zsyHcb7TOhhLC07KdODjiqchbfeN+EU66nOu432I9ZIHCgkGduGw+lhLSdV1ZHinbPsi+FYugzIdQQN+oPjKURPpTiWCWtTZKg0YW8jyI8RPD+1nA2w7sxGzWaw011DDwM6vFv/wA1z+TP7FahHFOhiIQhAIQhAIQhAIo4SoUI4oBCEIDhCEAhCEAm7DUi7hQLkzTLJ2a4eSGqMCLAZbjfnp6A6yu9cz1Mna6cNQVQNf8AlB0sp8b7aCWPs8py5ibk/b+XkWyhQytl11sBsDsb+vpYyU4M4XKoPM//ALOPX06PH9rLTMksG4vrIlKl50Un6Sjo+02WXlNlJhI1HM303lleJMMJuoVADI5H85sS/jJl5VNZ66cSb6iVHthw1KiB2FwwyNtsfytrzBlna85cfTD02U9I776fH+PHzxj8I1CoyOCCpI15jkfWc0ufb7B2ZKumt0a1tSPyk+n2lNndjXZ1yWcpQjhLIYwjhAUI4QFCOKVBCEIBCEIBHCEAhCEAlt4RiSMFrreow15gAHztrKnLV2Xs9FlI0VyT4Cw/pM/JOxbN9u3EAk3P6jy8Bb9/rOzh7agHznI2JXYbjKPC7EX+pndQGZgFGxJ97afeYanpri+1gw77STopfUSPwVG2/wDOUlaICzF1Oqmom5FnGz2OmkzXG23lkJCmRznTTAkR+OG3WbKXER1kq2dS7pcThqjQzZSxyNuwHmRMnKsNCDFis9eq827cUf8AdnBGzAg+us8vnsnbaj/ule3JQT5XF545Ovxf6ubX+xQhCaqFCOEBQhCAoRwgYwjhKhQjhAcIQgEIQgd3CKCPWUVL5FuzgbkL+n1Nh6y+Lj8NXw1SklNaDqLplUIXC+KjveIPWUzs3Tz1WXm1NwviQVIH0l0rYSmMtOo6oEAsfKcvmt+XHX4c5+H/AHqoisEbvk3JB7w00a2h2IsJaeDG6huv9TaQ/EMGtSndSDtY8jqBv7+8lFwj0aYNPvCwunL06Sl12Gc81UzXxfy/ym5N9DtpveQuO7TOlwDb/UQB6Cd78OrVu6j5Q43yk5eRzKDqbka8ppTsVRpC9ZXc8yCH9lGokTibLfpAt2yrsfzIfIW+skuFcfevVVNO9pvtpN9XsZRqa01dR6qR6GPBdmhgqqMCc5ICZ7EAnQkgW2H3lryq5+Uq0cRwLrTLoblRe222+s87xXH3cGzkLf8ATp9Z7OyZ6bLpdlP6dNR53t6zz0dnsPkzHDM2VmFgzZbhspNr+Gx1lZxe9vpT8Jx/IbZn15kB/v8AtPR+yXEmqgAODoPA9djObhvD6IYBcEAPBV8tzLDhuzNGnUFemDTIGqpazc9fGTbKiZs+2WKwiVqhSrZle2ZTsygAkaeNpRfiTw/CpTR8LTVGVxTYooRD3SdhuRlteXpUWpUzgsoyspLAqdWz2sfUSl/FBEp00RP11GqAeASx9LtLZ1r5yRW5z8Lb9vNYRwna5SijhAUI4QFCEICimUUqCEIQdEI4SwIQjgd/Aa4p4ui7bCol/InKfoZdu1nBycWUpkKrqGubka3zW9p5zPV+G4g4rDUncgkJ3TuVNrEMegII8jOXz5+q6PBrnYhquHWhTRVvZeZNySbm5+slcIc6gmRePYhAGtmU96x/eLAYoqCOv0mH3G3eXiyriWt3Gy/Y+fhJLB4oMO/oRuP38pU14iKdr2nSOMZxoubppe0Lz2s711BvewHuZHrTzVS78h3QSNCd/XSQf4ms98i2A3NrDy15yQ4Pkq0QS4FTM19dRY5ctvSSj9XThRzKAR4TKthwKbaC4vcc/ORvAKrqSHI0OhnZxVmVGKNZyCFP1256R+K3/ZowuKQ6Pa4NtP5pOiszA93VBr4nw8p5/U4xVSrlrIqPybUI/ip5+Us/CuLFrCo4N+gAW/lHWlz+xMPRFQMHG/py6zzb4sUgr4Wx/wCG/wBGH9Z6XRcE6ka6e955T8VaxOPCX7qU0AHS5JM08M/k5vLf48UmKOE7HMUI4QFFMooChHFAUI4oBCEJUEI4SwIQhAJaeyXGlpA0XNgSSpO2osVP39TKtHI1manKtnVzexeuJ4mkTlpkZt2trpe0VE5wBp/Osp/D6mWoPHT3/uBLHhq+RwTt0nJrHxvG038vbPiuCIcAE6g7cjy9NZ00qLhQqtbTU9PADqZJvSV0RibWO/hqAPeOqOdrgj6ruPtKNO8b+FVM1MA6Ab9T4nx0kL2lwwtmUZbXyMpKspJ11G4vea74ktdFCpci7Gx152Gu8K/B8XUQ9+kwOwztf0usmSF+ViMwXaevS7pfNY7knYdbc5fOHcUfFd97W0y9Rbn4X1+kouC7H4l6gLqoS4zEugB8Brc+0vHCuz1Wx/x0QAABRncn7SeIny57RnaSj8zRvyg3BH6dtZwdn0em1RWbMiglSefh4GTmN4JWUkvWDrbbIVIAH6iWIndh8ElOmLjV/XUWNifK0rxPysvtPYDEpSo56zKFVRdmsP03vrzniPaHiRxeKqVtg7d0dFAso9gJbviNij8qkgJAZma3Lui33I/gnn86fDjk+Tn8mu3hQjnp3wb4TRqGvXqIrujIqZgDkurEst9mO1/DxmurydZvP8FwbE1//Jw9V781Ryv/AHWt9ZYcD8NuI1d6SUx1qOo+iZjPeKjEKSozHkL2v6xMpvcW9bk/2md3R5VgfhC5scRigOq00J9nc/8A1kd2y+HH4HDtiKFYuiZc6OoDAMwXMrLodSLggac+U9mqVVQXZgo6kgD6yE49WpYvB4ijTdXL0qgXKcwzBLgZhpcG2kj5U6+coRg3imwUI4oBCEJHARwjlgoRwgKEIQMlNjpLLRcOgYfteVmSfCHJJTwuP3Ey8uezv9L4vLxasLjMtPLcDx0NgQPrzvJDhz/MUDYdevLnrylYo1ATfntryI/nOS2BZkqLqdL21H36b9fKctbSp/EYfLv6HcGaKnF/l6Og6A28bcpI4d86jNcjltNON4cjg21vvf1lZ6ad7PTjHFlJBAFrkaA+4ktwzi2uVUF+Rtv11kP/ALM13Fr22/eT3DMAqW68yd5dXt/alsTRzoBzOpkfUo3buagEZdOdtj7SdpqL+Nv4ZFY7GU8HQerU0VBfe+ZibKvmT94mbfSmtceYfEaqPxa0gdKVMA/6n77fQrKlOniGLavVerU1Z2LH1O3ptOeduc8nHPb0p6F8Isc1KrilVcxNEVAt7ZmpsbLflfOdZ59LN8Oq4TiVIE2Dh6Z8c6EAe4Eanoe1VnxjjufLTQ7qz2NtLG4vr/yiacNw3EFT+JxLOSbjIppqo6dwi+3PrJhFJQXOjWbxGx+4m+3K8w+X/Gclv2rLdlcG9R2qK9Rg3ezs5Vbi9lBNra+M2cFKlAVwwoZHACAfpYKpJBUWIzEG1wcuhMsJWaqq9wgDcG3nbSJq85U/GSvE+PfDrEYek1ak61QHbNTRWzImY5SP81huANPGUUkdZ9D4fD1xina6ikSCmt2OZQzDKNrMTvOgcNwyBw1GkFcsXGRDnLfmLaa38ZGfNZ9x1XxTksr5xinq/aT4aU6gNThzBW3NJ27hv/kc6r5G48p5nxLhtXC1DTxFNkcfpYbjqpGjDxBIm2d519MdZsckIQlkCOKOWBCEIBCEIAJ2cKfLVXxuPcTkmdBrOp6EH2MrudzYnN5ZUvxOm6d9PUfuPGGG4xcAcwd9j7b+0kKwDLK/jMFqcu84c3vqt95svYv3CuIh1AFr8rAgH1O87X4kDpovX2Omtuk8socQqUzbMdOXltM6nFXbcnnzJ1JuTLfFWb49FqcWFrDU2FtuvnvJfg2IZz3idQSuose8NPQcuk8l/wBpuSDc6bdff0HtJfhnEsSe8l7DntfzPOOSJ+Vr2LF8SCEIpzNb6X/Uek89+JdZz8pVJ+XYsw5F72v5Wvb1kpwpznGc5mP3/pOb4g0hakl9SjfRgR9ZON/yhrPM9rzeEboVNiLERTuYCTPAuH4gMmKp0XanSqK7Oo0/w2VmtzNgNbSGnqnw/wCMKcGKLboWHuSf3mXl1c57F/HmavK9KDqEuzBVBIuWyje418iI6uMpogdnQK1rNcZTfax2nPw4o9Ncyq1gpFwDY2KEi/8Ao+s1cb4NTxgVaucKhJsjZb3A0b2mWfbPXIlFdSLg3FgRbmCLiGcWJHL+fvOahSWmiol8qqFFyScqiwueekbVAJb4q3U/FN7RcbqYGsBkDI4OU35ocrC3/afWHBHr44F616dI6KBbO/iL6Kv3kpxpMPUdPxCg5HYpf8t2VbgjnqCfScvE+P0qC/mBPJQR6bTn3Oarv8Wu4nJ7TWH4WUA+VUOnJ9fqP6SsfFXhtSvg0KUC703DFkGZkTI2c9St8tx4A8pD4Xtu3zDdrLfY6W9ZbeFdqFqWV9zbKT+ry6yuNTN6bxqz37fP8JK9qaiPjsSyDKprVLAaDRiCbeJBPrCdvXGiY4QmgIRwkhRwhAI1a2sySkTvp/OkWJsBYfzeZb3OcTIn+H1w9MANcgWPWJ6felWpVmQ3RiD4SXwvGhoKi+q/e05Lmz6b53LOVu4hhFZb21Gx/r4SDKEHWWQV6dQHI4ueR0+hkPxBP8RvC0mX8RqT7hYCmHax8NOsvmDprToE20EonCwM92IAHM6CWPinaSn8oU6V2JHeOw8hfWRqW30nOpJ7WnhmLpUqZr1Wsq7dWboo5mU7jHG3xdc1DoNkX/Ko2H7+shq+KerbMe6NhyAjTSWzn4s97+Xr8d9amKvgeR/Y+E4a+Fanqw06jUTtp1JvRv3m2d2M0JLL2YxIogMTozH0sABf2nLUwiPqe63hYD2mj8G6IwBup16G/lHk1NZ408d+OuvZeznEw9HMG0WpUpki25IdfYMfaSLcQA0z5yb3NiL66AL5TzjsPi2/B4lNzTelVF+YLFHv6T0qu6OtJ1YKA6MAgFjYcvDeVxrkjHzXmuf2xas5ZVCtdrlQQRe2+rWEw+XUar8tmVCVzC5vcXtoBzkpiGV2RwpYrfKdRa4sfpNdem7VFdABl071rnXwvL61fj6+1Zmd9qp2gwvzExNFmBamiVEaxX8rEP8AQkSq8P4IuLqFKb6gDPUtZE8EQasx8SJ6ZU4PnqPVqPcvTenlAsoVrE/USp4WkmAoqCwvbM7dWO9j05DynNuW8tdvg1zNkbsD8NqKMGeu787BUUH3vJHHcAp4em9WkTnRGbvsLHKpO9u7tKnj+2mIpANTS6NcC+5ItqJ1YntA9fAYg1BlYUX56jMpWx5c5XMlq+vlJ7ryV3Zjcm5OpPUnUmEIT0HGI5mlBm2E6FwgH5j6CRd5hxyTNKLNsp/b3kglNV2UDxOv3mZN/wBUzvm/qJ44PkAfna3gNT/SZi3/AA7X8dTOl6WbmJy1MA/6WHvM7vV+6nhXYaNOTEzccNVGmp9QZjUpG3e0MqOGK0zYTEiShjMs56mKKBkLkzoRQJpQTop077wMg5O03UUtM0ozelPpJQzQToLTWtlHUzoRlHLXx/aSMUos2uw6n9p0IgXneamqEzA1JHOp6u3YCgqYwqQCtWm6FTqDazi4/wCk+89Rp4dE/KqjyAH2nhnB8U6OlSk1nQggnYW69QRpbxl/ftrWsAKNNW5kuxA/6QB7ZpSamfVa6xd8sXgrGBPKeK9r8YdFrql//TpqPq+YyDq8Qq1mHz69VxcXBqNa19bLfL9IvkhPDf17HxDi9CiCHdS1tEUhnbwVBqZ5JxTEkZVrEswNyCbqOmg3MnOL4qjgqKrRAzuLr1IP6mPOVLAYN8XULXvY3Jbmekz1r5NfHn4+0u2CqYummQqoSxCtoXY3uxPIC5tMe0mGOG4c451HSmT11zn6JaWLBqVQZ1ysNPCQHxAxqNg0S4zmsDYdFRrn/wByj1l/HP5RHk16rzmEcJ3OVvbEHlEK5moxGcnEuj58x+YZpBjjg2/MMYrGaYXkjd809YZ76GaQZleODXUognSavkHqJ0RgQOX8MZmuFnWqzIoB7j7wNCYUczN6qBtG6C/WNVtCG2mBNjNaa0my15IWeNXiyxiBsDTEmK8RMCR4PVysR4Xkq1Y2lcwz5XHt7y38FwCVQDUJPQcv7zLU9tvHr0gsU3MDX9pzFzynpNHs7hmB7h155jczD/wvhkcWRmI5Ekj+8zsreaiiYfh9bEso1OgGZr2VRtr+wl54JwsU0CroBuTuTzk0MESQSLKNgIY2uqrpbpEiLUfjquYhAZ5N2mxvzsS5H5FJVBysDqfU3PtPQ+JYj5dF3vqdF63bS/pqfSeccToW7w9Z0eHne1h5L+I6EUJ1MjjmF5mJypYx3gwigZQiAjAgMRxQhBzKEBAzQxuYgIPtA2udvKICZNsJiJI2IZsWaBNyOPCBsmJWZxQMIiJkRGBA1E2lt4NiO6rK2h3XpKo6TdwnEFHsSdPtKanpfF9vUsFxJQLEjSTOExKsLiUfDOji45zbQ4yKRytcW08Jm3i+PV0lb40STckKDzBFvW4mA4uGW418p00OHrVsxJ8RqQfrIqVK7RVMrJSB0UZm10zNt7D/AOUhai5hYzfxCrnqux5u1vK9gPQACcdVtNJtmcjm1e3qErrlYiE7a9PMbwm3yiqOvMlMxgsyG2KKOAxCJY4BMpjGIGQjBmMYMDYsHggg8DaDdREYqZ7vtASRpxDGYUzNlcd2aKZ1kDsVrc5l84zAbREwOqnUvNiGcdE6zpBkjayznV8tQe3vNvzdbWnNiN/WRSLhwnHquVPfy5SSxOEWpdlPLVSLgyk0ax7p52k9gMexA8Jjx0Ss6dMq9lTfezae3KXzs6SFF/6ysUBreSmCxbKRaRU96qfbfBjCYt7r3KhLo3KzE3XzBv8ASVuviBa+vsbe8n/iDxZ69fIwAFIALzJJsSSfbTwlcLZkF5tn6c+vtztidf7RTI0vEwlkP//Z",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
    //setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "Left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
