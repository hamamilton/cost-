import React from 'react';
import { 
  MDBRow,
  MDBCol,
  MDBContainer,
} from 'mdbreact';
import LinkCard from '../LinkCard';

const Typography = () => {
  return (
      <MDBContainer fluid>

      <section>

        <div className="description">
            <p>MDB Admin Dashboard includes simple and easily customized typography for headings, body text, lists, and more.
                For even more control, check out the <a href="https://mdbootstrap.com/utilities/">textual utility classes</a>.</p>

            <p>The standard font for MDBootstrap is minimalist and elegant "<strong>Roboto</strong>" from Google.</p>

            <blockquote className="blockquote bq-primary">
                <p className="bq-title">About "Roboto"</p>
                <p>Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric. At the
                    same time, the font features friendly and open curves. While some grotesques distort their letterforms
                    to force a rigid rhythm, Roboto doesn’t compromise, allowing letters to be settled into their
                    natural width. This makes for a more natural reading rhythm more commonly found in humanist and
                    serif types.</p>
            </blockquote>
        </div>

      </section>

      <section>

        <MDBRow>
           <MDBCol md="12" lg="4">
                <h4 className="mt-4 mb-5 font-bold dark-grey-text"><strong>Standard</strong></h4>

                <h1>h1. heading</h1>
                <hr/>
                <h2>h2. heading</h2>
                <hr/>
                <h3>h3. heading</h3>
                <hr/>
                <h4>h4. heading</h4>
                <hr/>
                <h5>h5. heading</h5>
                <hr/>
                <h6>h6. heading</h6>
            </MDBCol>

            <MDBCol md="6" lg="4">
                <h4 className="mt-4 mb-5 font-bold dark-grey-text"><strong>Classes</strong></h4>

                <p className="h1">h1. Bootstrap heading</p>
                <hr/>
                <p className="h2">h2. Bootstrap heading</p>
                <hr/>
                <p className="h3">h3. Bootstrap heading</p>
                <hr/>
                <p className="h4">h4. Bootstrap heading</p>
                <hr/>
                <p className="h5">h5. Bootstrap heading</p>
                <hr/>
                <p className="h6">h6. Bootstrap heading</p>
            </MDBCol>

            <MDBCol md="6" lg="4">
                <h4 className="mt-4 mb-5 font-bold dark-grey-text"><strong>Responsive</strong></h4>

                <h1 className="h1-responsive">h1. heading</h1>
                <hr/>
                <h2 className="h2-responsive">h2. heading</h2>
                <hr/>
                <h3 className="h3-responsive">h3. heading</h3>
                <hr/>
                <h4 className="h4-responsive">h4. heading</h4>
                <hr/>
                <h5 className="h5-responsive">h5. heading</h5>
            </MDBCol>

        </MDBRow>

      </section>

      <hr className="my-5"/>

      <section>
        <h3>
            <strong>Fancy display heading</strong>
            <small className="text-muted ml-2">With faded secondary text</small>
        </h3>
      </section>

      <hr className="my-5"/>

      <section>
        <h1 className="display-1">Display 1</h1>
        <hr/>
        <h1 className="display-2">Display 2</h1>
        <hr/>
        <h1 className="display-3">Display 3</h1>
        <hr/>
        <h1 className="display-4">Display 4</h1>
      </section>

      <hr className="my-5"/>

      <section>
        <h5>
            <u>Lead</u>
        </h5>
        <p className="lead">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
        </p>

        <br/>
        <h5>
            <u>Regular paragraph</u>
        </h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis tenetur sit voluptatem molestias ad neque
            veritatis! Alias natus, nobis laudantium, veritatis, atque illum ipsam nisi voluptas nesciunt harum laborum
            perspiciatis!
        </p>
      </section>

      <hr className="my-5"/>

      <section>
        <p>You can use the mark tag to
            <mark>highlight</mark> text.</p>
        <p>
            <del>This line of text is meant to be treated as deleted text.</del>
        </p>
        <p>
            <s>This line of text is meant to be treated as no longer accurate.</s>
        </p>
        <p>
            <ins>This line of text is meant to be treated as an addition to the document.</ins>
        </p>
        <p>
            <u>This line of text will render as underlined</u>
        </p>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p><strong>This line rendered as bold text.</strong></p>
        <p><em>This line rendered as italicized text.</em></p>
      </section>

      <hr className="my-5"/>

      <section>
        <blockquote className="blockquote bq-primary mb-5">
            <p className="bq-title">Info notification</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam dignissimos itaque harum
                illo! Quidem, corporis at quae tempore nisi impedit cupiditate perferendis nesciunt, ex dolores doloremque!
                Sit, rem, in?</p>
        </blockquote>

        <blockquote className="blockquote bq-warning mb-5">
            <p className="bq-title">Warning notification</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam dignissimos itaque harum
                illo! Quidem, corporis at quae tempore nisi impedit cupiditate perferendis nesciunt, ex dolores doloremque!
                Sit, rem, in?</p>
        </blockquote>

        <blockquote className="blockquote bq-success mb-5">
            <p className="bq-title">Success notification</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam dignissimos itaque harum
                illo! Quidem, corporis at quae tempore nisi impedit cupiditate perferendis nesciunt, ex dolores doloremque!
                Sit, rem, in?</p>
        </blockquote>

        <blockquote className="blockquote bq-danger mb-5">
            <p className="bq-title">Danger notification</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam dignissimos itaque harum
                illo! Quidem, corporis at quae tempore nisi impedit cupiditate perferendis nesciunt, ex dolores doloremque!
                Sit, rem, in?</p>
        </blockquote>
      </section>

      <hr className="my-5"/>

      <section>
        <p className="red-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p className="pink-text">Impedit architecto, totam hic sunt eum odio, deleniti.</p>
        <p className="purple-text">Similique ex, expedita minus assumenda a magni beatae dolorum itaque.</p>
        <p className="deep-purple-text">Veritatis eum libero nam, adipisci, necessitatibus eos.</p>
        <p className="indigo-text">Sapiente, ea. Molestias sunt nihil saepe numquam quas perferendis.</p>
        <p className="blue-text">Sapiente sit, possimus maiores, quo alias corporis cum eum nesciunt.</p>
        <p className="light-blue-text">Corrupti adipisci, praesentium iusto eos, iure debitis modi.</p>
        <p className="cyan-text">Odio autem veritatis aliquam consequuntur ea voluptatibus.</p>
        <p className="teal-text">Similique, adipisci ea, sequi magnam sit inventore.</p>
        <p className="green-text">Eos et vitae, odit deserunt dignissimos voluptas.</p>
        <p className="light-green-text">Fugit nihil numquam inventore accusantium tenetur ex est.</p>
        <p className="lime-text">Sed odit inventore illum excepturi officia, reiciendis numquam modi.</p>
        <p className="yellow-text">At odio animi distinctio, aut enim tempora nobis error odit mollitia.</p>
        <p className="amber-text">Quo at accusamus vel earum hic, inventore non, minima sint.</p>
        <p className="orange-text">Iusto odit eos distinctio temporibus voluptates ad, illo repellat.</p>
        <p className="deep-orange-text">Quas fugit fuga assumenda nihil esse et culpa reiciendis voluptatum.</p>
        <p className="brown-text">Excepturi iusto amet sunt illo ad debitis quibusdam eius, consequatur.</p>
        <p className="grey-text">Non sint nulla incidunt, odit repellat tempore, veniam ratione fugit.</p>
        <p className="blue-grey-text">Eius, provident. Quo similique, repellat atque voluptas explicabo odio.</p>
        <p className="white-text">In consequuntur error, non consequatur expedita maxime dolorum.</p>
     </section>
      <LinkCard docs="https://mdbootstrap.com/docs/react/content/typography/"/>
    </MDBContainer>
  );
}

export default Typography;