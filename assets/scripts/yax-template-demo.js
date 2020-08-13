import {
  LitElement,
  html
} from 'https://jspm.dev/lit-element';

class YaxTemplateDemo extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html `
          <section class="container" style="margin-top:50px;">
        <div class="columns features">
            <div class="column is-4 modal-button" data-target="modal-card">
                <div class="card is-shady">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="../images/yax-template-wip.png" alt="WIP Yax template">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            <h4>WIP: The First Yax Template</h4>
                            <p>Nothing could be simpler. Clean, standards-based HTML. "Classless" styling. Mavo for editing pages in place.</p>
                            <span class="button is-link modal-button">Select</span>
                        </div>
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="/images/daniel-kehoe.jpg" alt="Daniel Kehoe avatar">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-6 has-text-grey">template by<br/>Daniel Kehoe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Spinner to appear after form submission -->
    <div id="spinner" class="pageloader has-background-info"><span class="title">Saving website template to GitHub</span></div>
    <!--  ===============
    HERE BE MODALS
    ===============  -->
    <!-- 3dFlipVertical card tiny -->
    <div id="modal-card" class="modal modal-fx-3dSlit">
        <div class="modal-background"></div>
        <div class="modal-content is-tiny">
            <!-- content -->
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="/images/yax-template-wip.png" alt="WIP Yax template">
                    </figure>
                </div>
                <div class="card-content">

                    <form id="github-oauth" class="form-horizontal" action="#" method="POST">

                        <!-- Template ID-->
                        <input type="hidden" id="templateId" name="templateId" value="yax-template-wip">

                        <fieldset>

                            <!-- Radio buttons-->
                            <div class="field">
                                <label class="label">GitHub account</label>
                                <div>
                                    <input class="is-checkradio is-small" id="github-account-yes" type="radio" name="github-account" checked="checked">
                                    <label for="github-account-yes">I have a GitHub account</label>
                                </div>
                                <div>
                                    <input class="is-checkradio is-small" id="github-account-no" type="radio" name="github-account">
                                    <label for="github-account-no">Create a GitHub account for me</label>
                                </div>
                                <p class="help">We'll store your website files on <a href="https://github.com/">GitHub</a>.</p>
                            </div>

                            <!-- Text input-->
                            <div class="field">
                                <label class="label" for="repository">Give a project name</label>
                                <div class="control">
                                    <input id="repository" name="repository" type="text" placeholder="my-website" class="input is-small" required="">
                                    <p class="help">A name for a new GitHub repository for your website files.</p>
                                </div>
                            </div>

                            <!-- Text input-->
                            <div class="field">
                                <label class="label" for="title">Give a website title</label>
                                <div class="control">
                                    <input id="title" name="title" type="text" placeholder="My.com | My Website" class="input is-small">
                                    <p class="help">A title you'd like to see in search results and the browser tab.</p>
                                </div>
                            </div>

                            <!-- Text input-->
                            <div class="field">
                                <label class="label" for="description">Describe your website</label>
                                <div class="control">
                                    <input id="description" name="description" type="text" placeholder="One line description (with some keywords)." class="input is-small">
                                    <p class="help">A description you'd like to see in search results.</p>
                                </div>
                            </div>

                            <!-- Button -->
                            <div class="field">
                                <label class="label" for="deploybutton"></label>
                                <div class="control">
                                    <button id="deploy-button" name="deploy-button" class="button is-info" style="display:block">Deploy Now</button>
                                    <div class="confirmable" style="display:none">
                                        <a id="confirm-button" name="confirm-button" class="button is-success" href="#">Confirm</a>
                                    </div>
                                </div>
                            </div>

                            <div class="field">
                                <div class="confirmable" style="display:none">
                                    <p class="help"><a href="#" id="reset-link">Reset form</a> or click "Confirm." Yax will create a website from this template, storing the files in your GitHub account in a repository named <span id="repo-name">repo</span>. With your permission, we'll welcome you with an onboarding email at your GitHub email address.</p>
                                </div>
                            </div>
                        </fieldset>
                    </form>

                </div>
            </div>
        </div>
        <!-- end content -->
    </div>
    `;
  }
}
// Register the new element with the browser
customElements.define('yax-template-demo', YaxTemplateDemo);
