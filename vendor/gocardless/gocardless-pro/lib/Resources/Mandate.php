<?php
/**
 * WARNING: Do not edit by hand, this file was generated by Crank:
 *
 * https://github.com/gocardless/crank
 */

namespace GoCardlessPro\Resources;

/**
 * A thin wrapper around a mandate, providing access to it's
 * attributes
 *
 * @property-read $created_at
 * @property-read $id
 * @property-read $links
 * @property-read $metadata
 * @property-read $next_possible_charge_date
 * @property-read $payments_require_approval
 * @property-read $reference
 * @property-read $scheme
 * @property-read $status
 */
class Mandate extends BaseResource
{
    protected $model_name = "Mandate";

    /**
     * Fixed [timestamp](#overview-time-zones-dates), recording when this
     * resource was created.
     */
    protected $created_at;

    /**
     * Unique identifier, beginning with "MD".
     */
    protected $id;

    /**
     * 
     */
    protected $links;

    /**
     * Key-value store of custom data. Up to 3 keys are permitted, with key
     * names up to 50 characters and values up to 500 characters.
     */
    protected $metadata;

    /**
     * The earliest date a newly created payment for this mandate could be
     * charged.
     */
    protected $next_possible_charge_date;

    /**
     * Boolean value showing whether payments and subscriptions under this
     * mandate require approval via an automated email before being processed.
     */
    protected $payments_require_approval;

    /**
     * Unique reference. Different schemes have different length and [character
     * set](#character-sets) requirements. GoCardless will generate a unique
     * reference satisfying the different scheme requirements if this field is
     * left blank.
     */
    protected $reference;

    /**
     * <a name="mandates_scheme"></a>Direct Debit scheme to which this mandate
     * and associated payments are submitted. Can be supplied or automatically
     * detected from the customer's bank account. Currently only "autogiro",
     * "bacs", "sepa_core", and "sepa_cor1" are supported.
     */
    protected $scheme;

    /**
     * One of:
     * <ul>
     * <li>`pending_customer_approval`: the mandate
     * has not yet been signed by the second customer</li>
     *
     * <li>`pending_submission`: the mandate has not yet been submitted to the
     * customer's bank</li>
     * <li>`submitted`: the mandate has been
     * submitted to the customer's bank but has not been processed yet</li>
    
     * * <li>`active`: the mandate has been successfully set up by the
     * customer's bank</li>
     * <li>`failed`: the mandate could not be
     * created</li>
     * <li>`cancelled`: the mandate has been cancelled</li>

     *     * <li>`expired`: the mandate has expired due to dormancy</li>
     *
     * </ul>
     */
    protected $status;

}
